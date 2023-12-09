const { User } = require('../models/userModel');

const getAllUsers = async (_req, res, _next) => {
  try {
    const users = await User.find().exec();

    return res.json({
      users,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const postUser = async (req, res, _next) => {
  try {
    const user = req.body;

    const postedUser = await User.create({ ...user });

    return res.json({
      postedUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllUsers,
  postUser,
};
