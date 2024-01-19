const express = require('express');
const router = express.Router();
const schoolController = require('../controllers/schoolController')

router.post('/create', schoolController.createSchool);
router.get('/my-schools', schoolController.getMySchools);

module.exports = router;
