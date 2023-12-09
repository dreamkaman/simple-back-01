const express = require('express');

const { getAllRegions } = require('../controllers/regionController');

const router = express.Router();

router.get('/', getAllRegions);

module.exports = router;
