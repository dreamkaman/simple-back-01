const { User } = require('../models/userModel');
const { Segment } = require('../models/segmentModel');

const getAllSegments = async (_req, res, _next) => {
  try {
    const users = await User.find().exec();

    const segments = await Segment.find().exec();

    const newSegments = segments.map(segment => {
      const { _id, idRegion, idUserStatus, _age, segmentName } = segment;

      const usersCount = users.filter(
        user => (idRegion && String(user.idRegion) === String(idRegion)) || !idRegion,
      ).length;

      return { _id, idRegion, idUserStatus, _age, segmentName, usersCount };
    });
    return res.json({
      newSegments,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const postSegment = async (req, res, _next) => {
  try {
    const segment = req.body;

    const postedSegment = await Segment.create(segment);

    return res.json({
      postedSegment,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAllSegments,
  postSegment,
};
