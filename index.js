const app = require('./app');

const mongoose = require('mongoose');

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Database connection successful. Server run on port ${PORT}`);
    });
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });

//Bot EVeteran
// const { bot } = require('./bot');

// bot.on('message', msg => {
//   const text = msg.text;
//   const chatId = msg.chat.id;

//   if (text === '/start') {
//     bot.sendMessage(chatId, 'Ласкаво просимо до чат-бота е-Ветеран');
//   }
// });
