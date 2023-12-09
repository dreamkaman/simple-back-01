const express = require('express');

const { getAllSegments, postSegment } = require('../controllers/segmentController');

const router = express.Router();

router.get('/', getAllSegments);

router.post('/', postSegment);

module.exports = router;
