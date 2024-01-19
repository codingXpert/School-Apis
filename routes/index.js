const express = require('express');
const router = express.Router();

router.use('/user', require('./auth'));
router.use('/school', require('./school'));
router.use('/class', require('./class'));

module.exports = router;