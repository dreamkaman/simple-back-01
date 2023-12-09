const express = require('express');
const { getAllUsers, postUser, getAllUsersByRegion } = require('../controllers/userController');

const router = express.Router();

router.get('/', getAllUsers);

router.get('/byregion', getAllUsersByRegion);

router.post('/', postUser);

module.exports = router;
