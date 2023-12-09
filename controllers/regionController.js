const { Region } = require('../models/regionModel');

const getAllRegions = async (req, res, _next) => {
  try {
    const regions = await Region.find().exec();

    return res.json({
      regions,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllRegions,
};
