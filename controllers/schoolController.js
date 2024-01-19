const School = require('../models/school');
const User = require('../models/user');

const schoolController = {
  createSchool: async (req, res) => {
    try {
      const { name, photo } = req.body;

      const school = await School.create({
        name,
        photo,
      });

      res.status(201).json({ school });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getMySchools: async (req, res) => {
    try {
      const userId = req.userId;

      const schools = await User.findAll({
        where: { id: userId },
        include: [{ model: School }],
      });

      res.status(200).json({ schools });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = schoolController;
