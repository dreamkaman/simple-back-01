const { User } = require('../models/userModel');
const { Region } = require('../models/regionModel');

const getAllUsers = async (req, res, _next) => {
  try {
    const { page = 1, limit = 50, idregion, iduserstatus } = req.query;

    const skip = (page - 1) * limit;

    let searchValue = {};

    if (idregion) {
      searchValue = { ...searchValue, idRegion: idregion };
    }

    if (iduserstatus) {
      searchValue = { ...searchValue, idUserstatus: iduserstatus };
    }

    const users = await User.find(searchValue).skip(skip).limit(limit).exec();

    return res.json({
      users,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllUsersByRegion = async (req, res, _next) => {
  try {
    const regions = await Region.find().exec();
    const users = await User.find().exec();

    const newRegions = regions.map(region => {
      const usersCount = users.filter(user => String(user.idRegion) === String(region._id)).length;
      return { regionName: region.regionName, usersCount };
    });

    return res.json({
      newRegions,
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
  getAllUsersByRegion,
};
