const { UserStatus } = require('../models/userStatusesModel');

const getAllUserStatuses = async (req, res, _next) => {
  try {
    const userStatuses = await UserStatus.find().exec();

    return res.json({
      userStatuses,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllUserStatuses,
};
