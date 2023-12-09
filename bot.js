const TelegramAPI = require('node-telegram-bot-api');

const { BOT_TOKEN } = process.env;

const bot = new TelegramAPI(BOT_TOKEN, { polling: true });

function botLogic() {
  bot.on('message', msg => {
    const text = msg.text;
    const chatId = msg.chat.id;

    console.log(msg);

    if (text === '/start') {
      bot.sendMessage(chatId, 'Ласкаво просимо до чат-бота е-Ветеран');
    }
  });
}

module.exports = {
  botLogic,
};
