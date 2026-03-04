const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

const bot = new TelegramBot('8514655196:AAG21XJHIMXq5jt2_p5RZbCbkIs4_MXqO4Q', { polling: true });

bot.onText(/\/insta (.+)/, async (message, match) => {
  const chatId = message.chat.id;
  const url = match[1];

  // Here, make a third-party API call to get Instagram data. Customize this part as needed.
  try {
    const response = await axios.get('})(async(message,match)=>{
if(!match) return await message.send('ig url required')
const d=await instaSave(match)
const c=(d.description?📝 ${d.description}\n:)+(d.profileName?`👤 ${d.profileName}\n`:)+(d.likes?❤️ ${d.likes}\n:)+(d.comments?`💬 ${d.comments}\n`:)+(d.timeAgo?⏰ ${d.timeAgo}:``)
if(d.MP4) await message.send({video:{url:d.MP4},caption:c})
else if(d.JPEG) await message.send({image:{url:d.JPEG},caption:c})
else await message.send('err')
})', {
      params: { url: url }
    });
    const videoUrl = response.data.videoUrl;
    bot.sendVideo(chatId, videoUrl);
  } catch (error) {
    bot.sendMessage(chatId, 'Failed to download video.');
  }
});
