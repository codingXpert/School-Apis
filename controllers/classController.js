const Class = require('../models/class');
const School = require('../models/school');

const classController = {
  createClass: async (req, res) => {
    try {
      const { name, schoolId } = req.body;

      const school = await School.findByPk(schoolId);

      if (!school) {
        return res.status(404).json({ error: 'School not found' });
      }

      const newClass = await Class.create({
        name,
        schoolId,
      });

      res.status(201).json({ newClass });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getClassesBySchool: async (req, res) => {
    try {
      const { schoolId } = req.params;

      const classes = await Class.findAll({
        where: { schoolId },
      });

      res.status(200).json({ classes });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = classController;
