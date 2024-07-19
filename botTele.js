const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.TOKEN_TELEGRAM, { polling: true });

async function connectToTelegram() {
    bot.onText(/\/start/, (msg) => {
        const chatId = msg.chat.id;
        bot.sendMessage(chatId, 'Halo! Selamat datang di bot sederhana saya.');
    });

    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        const text = msg.text;
        console.log(chatId)

        if (text !== '/start') {
            bot.sendMessage(chatId, `Anda mengirim: ${text}`);
        }
    });

    return bot
}

module.exports = connectToTelegram