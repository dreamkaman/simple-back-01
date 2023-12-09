const { User } = require('../models/userModel');

const checkRegistration = chatId => {
  return (registeredUser = User.find({ chatId }).exec());
};

module.exports = {
  checkRegistration,
};
