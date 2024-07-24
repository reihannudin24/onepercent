
const express = require('express')
const cors = require('cors')
const connectToWhatsApp = require('./botWa');
const connectToTelegram = require('./botTele');

const Schedules = require('./models/SchedulesModel');
const User = require('./models/UserModel');

const routerUser = require('./routes/UserRoutes');
const routerSchedules = require('./routes/SchedulesRoutes');
const routerFinances = require('./routes/FinancesRoutes');
const routerBudgets = require('./routes/BudgetsRoutes');


const app = express();


app.use(cors({
    origin : 'http://localhost:3001',
    methods : ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders : ['Content-Type', 'Authorization']
}))

app.use(express.json());
const PORT = process.env.PORT || 3000;

let whatsappBot;
connectToWhatsApp().then(res => {
    whatsappBot = res
})

let telegramBot;
connectToTelegram().then(res => {
    telegramBot = res
})

app.use((req, res, next) => {
    req.whatsappBot = whatsappBot
    req.telegramBot = telegramBot
    next()
})

app.use('/api/v1/users/', routerUser);
app.use('/api/v1/schedules/', routerSchedules);
app.use('/api/v1/finances/', routerFinances);
app.use('/api/v1/budgets/', routerBudgets);

function SelisihRemidner(end_date, end_time) {
    let date = new Date();

    let dateEnd = new Date(end_date);
    let year = dateEnd.getFullYear();
    let month = String(dateEnd.getMonth() + 1).padStart(2, '0');
    let day = String(dateEnd.getDate()).padStart(2, '0');

    let startDateObj = new Date(`${date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, '0') + "-" + date.getDate()}T${date.getHours() + ":" + String(date.getMinutes()).padStart(2, '0') + ":" + String(date.getSeconds()).padStart(2, '0')}`);
    // console.log(`${date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, '0') + "-" + date.getDate()}T${date.getHours() + ":" + String(date.getMinutes()).padStart(2, '0') + ":" + String(date.getSeconds()).padStart(2, '0')}`)
    let endDateObj = new Date(`${year}-${month}-${day}T${end_time}`);
    // console.log(`${year}-${month}-${day}T${end_time}`)

    let difference = startDateObj.getTime() - endDateObj.getTime();


    let millisecondsPerDay = 1000 * 60 * 60 * 24;
    let millisecondsPerHour = 1000 * 60 * 60;
    let millisecondsPerMinute = 1000 * 60;
    let millisecondsPerSecond = 1000;


    let days = Math.floor(difference / millisecondsPerDay);
    if (-1 > difference) days += 1
    difference = difference % millisecondsPerDay;

    let hours = Math.floor(difference / millisecondsPerHour);
    if (-1 > difference) hours += 1
    difference = difference % millisecondsPerHour;

    let minutes = Math.floor(difference / millisecondsPerMinute);
    difference = difference % millisecondsPerMinute;

    let seconds = Math.floor(difference / millisecondsPerSecond);

    return { days, hours, minutes, seconds };
}

Schedules.return().then(async (res) => {
    function updateAndDisplay() {
        res.forEach(async item => {
            const user = await User.findById(item.user_id)
            if (item.status === "belum_mulai") {
                let selisih = SelisihRemidner(item.start_dates, item.start_time);
                if (selisih.seconds > 1) {
                    whatsappBot.sendMessage("6282123928824@s.whatsapp.net", { text: `Haii ${user.username} ${item.title} Kamu telah dimulai` })
                    Schedules.updateStatus("sedang_berlangsung", item.id)
                    item.status = "sedang_berlangsung"
                }
                return
            }

            let selisih = SelisihRemidner(item.end_dates, item.end_time);
            if (selisih.seconds > 1) {
                if (item.status !== "selesai") {
                    if (whatsappBot) {
                        try {
                            whatsappBot.sendMessage("6282123928824@s.whatsapp.net", { text: `Haii ${user.username} ${item.title} Kamu telah selesai` })
                            Schedules.updateStatus("selesai", item.id)
                            item.status = "selesai"
                        } catch (error) {
                            console.log(error)
                        }
                    }
                }
            }
        });
    }

    setInterval(updateAndDisplay, 1000);

})



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})