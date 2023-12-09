const express = require('express');
const { getAllUsers, postUser } = require('../controllers/userController');

const router = express.Router();

router.get('/', getAllUsers);

router.post('/', postUser);

module.exports = router;
