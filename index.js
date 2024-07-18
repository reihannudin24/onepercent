
const express = require('express')
const routerUser = require('./routes/UserRoutes');
const routerSchedules = require('./routes/SchedulesRoutes');
const { connectToWhatsApp } = require('./bot');
const Schedules = require('./models/SchedulesModel');


const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

let whatsappBot;
// connectToWhatsApp().then(res => {
//     whatsappBot = res
// })

app.use((req, res, next) => {
    req.whatsappBot = whatsappBot
    next()
})

app.use('/api/v1/users/', routerUser);
app.use('/api/v1/schedules/', routerSchedules);

let data = [
    // { start_date: '2024-07-18', start_time: '07:00:00', end_date: '2024-07-18', end_time: '13:17:00' },
    // { start_date: '2024-07-18', start_time: '09:00:00', end_date: '2024-07-18', end_time: '10:30:00' }
];

function SelisihRemidner(end_date, end_time) {
    let date = new Date();
    let startDateObj = new Date(`${date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, '0') + "-" + date.getDate()}T${date.getHours() + ":" + String(date.getMinutes()).padStart(2, '0') + ":" + String(date.getSeconds()).padStart(2, '0')}`);
    let endDateObj = new Date(`${end_date}T${end_time}`);
    console.log(`${end_date}T${end_time}`)
    let difference = startDateObj.getTime() - endDateObj.getTime();


    let millisecondsPerDay = 1000 * 60 * 60 * 24;
    let millisecondsPerHour = 1000 * 60 * 60;
    let millisecondsPerMinute = 1000 * 60;
    let millisecondsPerSecond = 1000;

    let days = Math.floor(difference / millisecondsPerDay);
    difference = difference % millisecondsPerDay;

    let hours = Math.floor(difference / millisecondsPerHour);
    difference = difference % millisecondsPerHour;

    let minutes = Math.floor(difference / millisecondsPerMinute);
    difference = difference % millisecondsPerMinute;

    let seconds = Math.floor(difference / millisecondsPerSecond);

    return { days, hours, minutes, seconds };
}

Schedules.return().then(async (res) => {
    function updateAndDisplay() {
        res.forEach(item => {
            let selisih = SelisihRemidner(item.end_dates, item.end_time);
            console.log(selisih)
            if (selisih.days > 1 && selisih.hours > 1 && selisih.minutes > 1 && selisih.seconds > 1) {
                console.log(`Selisih waktu untuk data: ${JSON.stringify(item)} adalah: ${selisih.hours} jam ${selisih.minutes} menit ${selisih.seconds} detik`);
                // if (whatsappBot) {
                //     whatsappBot.sendMessage("6282123928824@s.whatsapp.net", { text: 'Hello there!' })
                // }
            }
        });
    }

    setInterval(updateAndDisplay, 1000);

})



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})