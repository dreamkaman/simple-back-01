const express = require('express');

const {
  getAllAppeals,
  postAppeal,
  getMostAskedAppeals,
} = require('../controllers/appealController');

const router = express.Router();

router.get('/', getAllAppeals);

router.post('/', postAppeal);

router.get('/mostaskedquestions', getMostAskedAppeals);

module.exports = router;
