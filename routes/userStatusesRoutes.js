const express = require('express');

const { getAllUserStatuses } = require('../controllers/userStatusesController');

const router = express.Router();

router.get('/', getAllUserStatuses);


module.exports = router;
