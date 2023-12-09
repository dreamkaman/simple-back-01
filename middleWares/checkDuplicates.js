const { User } = require('../models/userModel');

const checkDuplicates = async (req, res, next) => {
  try {
    const { chatId } = req.body;

    console.log(chatId);

    const registeredUser = await User.findOne({ chatId }).exec();

    if (registeredUser) {
      throw new Error('User is already registered in data base!');
    }

    next();
  } catch (error) {
    console.error(error);
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  checkDuplicates,
};
