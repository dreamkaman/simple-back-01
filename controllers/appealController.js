const { Appeal } = require('../models/appealModel');
const { Service } = require('../models/serviceModel');

const getAllAppeals = async (req, res, _next) => {
  try {
    const { page = 1, limit = 50 } = req.query;

    const skip = (page - 1) * limit;

    const users = await Appeal.find().skip(skip).limit(limit).exec();

    return res.json({
      users,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getMostAskedAppeals = async (req, res, _next) => {
  try {
    const services = await Service.find().exec();

    const appeals = await Appeal.find().exec();

    const newServices = services.map(service => {
      const appealsCount = appeals.filter(
        appeal => String(appeal.idService) === String(service._id),
      ).length;
      return { serviceName: service.serviceName, appealsCount };
    });

    newServices.sort((a, b) => b.appealsCount - a.appealsCount).length = 5;

    return res.json({
      newServices,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const postAppeal = async (req, res, _next) => {
  try {
    const appeal = req.body;

    const postedAppeal = await Appeal.create({ ...appeal });

    return res.json({
      postedAppeal,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllAppeals,
  postAppeal,
  getMostAskedAppeals,
};
