const TelegramBot = require('node-telegram-bot-api');

const token = 'তোমার_বট_টোকেন_এখানে_দেবে';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, 'Hi, Everyone!');
});

bot.onText(/\/go/, (msg) => {
    bot.sendMessage(msg.chat.id, 'কেমন আছো?');
});
