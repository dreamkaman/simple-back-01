const TelegramAPI = require('node-telegram-bot-api');

const { BOT_TOKEN } = process.env;

const bot = new TelegramAPI(BOT_TOKEN, { polling: true });

module.exports = {
  bot,
};
