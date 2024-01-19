const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController')

router.post('/create', classController.createClass);
router.get('/by-school/:schoolId', classController.getClassesBySchool);

module.exports = router;
