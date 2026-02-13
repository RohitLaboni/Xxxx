const TelegramBot = require('node-telegram-bot-api');

const token = '8514655196:AAG21XJHIMXq5jt2_p5RZbCbkIs4_MXqO4Q';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Hi, Everyone!');
});

bot.onText(/\/go/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Bal🌚🖕?');
});
