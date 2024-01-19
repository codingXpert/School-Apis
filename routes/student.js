const express = require('express');
const studentController = require('../controllers/studentController');
const authenticate = require('../controllers/authController');
const router = express.Router();

router.post('/create', authenticate, studentController.createStudent);
router.get('/get', authenticate, studentController.getStudents);
router.post('/assign-to-class', authenticate, studentController.assignStudentToClass);
router.get('/in-all-classes', authenticate, studentController.getStudentsInAllClasses);
router.get('/classmates/:studentId', authenticate, studentController.getClassmatesOfStudent);

module.exports = router;
