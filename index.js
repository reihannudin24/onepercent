
const express = require('express')
const routerUser = require('./routes/UserRoutes');
const routerSchedules = require('./routes/SchedulesRoutes');
const { connectToWhatsApp } = require('./botWa');
const connectToTelegram = require('./botTele');
const Schedules = require('./models/SchedulesModel');


const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

let whatsappBot;
// connectToWhatsApp().then(res => {
//     whatsappBot = res
// })

let telegramBot;
connectToTelegram().then(res => {
    telegramBot = res
})

app.use((req, res, next) => {
    req.whatsappBot = whatsappBot
    next()
})

app.use('/api/v1/users/', routerUser);
app.use('/api/v1/schedules/', routerSchedules);

function SelisihRemidner(end_date, end_time) {
    let date = new Date();

    let dateEnd = new Date(end_date);
    let year = dateEnd.getFullYear();
    let month = String(dateEnd.getMonth() + 1).padStart(2, '0');
    let day = String(dateEnd.getDate()).padStart(2, '0');

    let startDateObj = new Date(`${date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, '0') + "-" + date.getDate()}T${date.getHours() + ":" + String(date.getMinutes()).padStart(2, '0') + ":" + String(date.getSeconds()).padStart(2, '0')}`);
    let endDateObj = new Date(`${year}-${month}-${day}T${end_time}`);

    let difference = startDateObj.getTime() - endDateObj.getTime();


    let millisecondsPerDay = 1000 * 60 * 60 * 24;
    let millisecondsPerHour = 1000 * 60 * 60;
    let millisecondsPerMinute = 1000 * 60;
    let millisecondsPerSecond = 1000;


    let days = Math.floor(difference / millisecondsPerDay);
    if (-1 > -453000) days += 1
    difference = difference % millisecondsPerDay;

    let hours = Math.floor(difference / millisecondsPerHour);
    if (-1 > -453000) hours += 1
    difference = difference % millisecondsPerHour;

    let minutes = Math.floor(difference / millisecondsPerMinute);
    difference = difference % millisecondsPerMinute;

    let seconds = Math.floor(difference / millisecondsPerSecond);

    return { days, hours, minutes, seconds };
}

Schedules.return().then(async (res) => {
    function updateAndDisplay() {
        res.forEach(item => {

            if (item.status === "Belum mulai") {
                let selisih = SelisihRemidner(item.start_dates, item.start_time);
                if (selisih.seconds > 1) {
                    whatsappBot.sendMessage("6282123928824@s.whatsapp.net", { text: 'Selesai Ler' })
                    Schedules.updateStatus("SedangMengerjakan", item.id)
                }
                return
            }

            let selisih = SelisihRemidner(item.end_dates, item.end_time);
            if (selisih.seconds > 1) {
                if (item.status !== "Selesai dikerjakan") {
                    if (whatsappBot) {
                        whatsappBot.sendMessage("6282123928824@s.whatsapp.net", { text: 'Selesai Ler' })
                        Schedules.updateStatus("Selesai dikerjakan", item.id)
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