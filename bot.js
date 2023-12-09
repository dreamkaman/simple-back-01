const TelegramAPI = require('node-telegram-bot-api');

const { BOT_TOKEN } = process.env;

const bot = new TelegramAPI(BOT_TOKEN, { polling: true });

const { checkRegistration } = require('./services/checkRegistration');

const state = {
  q1: false,
  q2: false,
  q3: false,
};

function botLogic() {
  bot.on('message', msg => {
    const text = msg.text;
    const chatId = msg.chat.id;

    console.log(msg);

    if (text === '/start') {
      bot.sendMessage(chatId, 'Ласкаво просимо до чат-бота е-Ветеран');
    }

    if (checkRegistration(chatId) && !state.q1) {
      bot.sendMessage(chatId, 'Схоже, що ви не зареєстровані. Будь ласка, пройдіть реєстрацію!');

      bot.sendMessage(chatId, 'Будь-ласка, введить свій номер телефону у форматі +380123546789');

      state.q1 = true;
    }

    if (state.q2) {
      bot.sendMessage(chatId, 'Будь-ласка, введить свій номер телефону у форматі +380123546789');
    }
  });
}

module.exports = {
  botLogic,
};
