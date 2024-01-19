const express = require('express');
const router = express.Router();

router.use('/user', require('./user'));
router.use('./school', require('./school'));

module.exports = router;