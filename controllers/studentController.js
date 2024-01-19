const Student = require('../models/student');
const School = require('../models/school');
const Class = require('../models/class');
const sequelize = require('sequelize')

const studentController = {
  createStudent: async (req, res) => {
    try {
      const { name, photo, schoolId } = req.body;

      const school = await School.findByPk(schoolId);

      if (!school) {
        return res.status(404).json({ error: 'School not found' });
      }

      const newStudent = await Student.create({
        name,
        photo,
        schoolId,
      });

      res.status(201).json({ newStudent });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getStudents: async (req, res) => {
    try {
      const { schoolId, classId } = req.query;

      const whereCondition = {};

      if (schoolId) {
        whereCondition.schoolId = schoolId;
      }

      if (classId) {
        whereCondition.classId = classId;
      }

      const students = await Student.findAll({
        where: whereCondition,
      });

      res.status(200).json({ students });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  assignStudentToClass: async (req, res) => {
    try {
      const { classId, studentId } = req.body;

      const student = await Student.findByPk(studentId);

      if (!student) {
        return res.status(404).json({ error: 'Student not found' });
      }

      const updatedStudent = await student.update({ classId });

      res.status(200).json({ updatedStudent });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getStudentsInAllClasses: async (req, res) => {
    try {
        const studentsInAllClasses = await Student.findAll({
          where: {
            id: {
              [sequelize.literal('NOT EXISTS (SELECT c.id FROM Classes c WHERE c.id NOT IN (SELECT sc.classId FROM StudentsClasses sc WHERE sc.studentId = Student.id))')]: null,
            },
          },
          attributes: ['id', 'name', 'photo'],
        });
  
        res.status(200).json({ studentsInAllClasses });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    },

  getClassmatesOfStudent: async (req, res) => {
    try {
        const { studentId } = req.params;
  
        const student = await Student.findByPk(studentId);
  
        if (!student) {
          return res.status(404).json({ error: 'Student not found' });
        }
  
        const classmates = await Student.findAll({
          where: {
            classId: student.classId,
            id: { [Sequelize.Op.ne]: studentId }, // Exclude the current student
          },
        });
  
        res.status(200).json({ classmates });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
}