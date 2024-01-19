const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config/sqlConnection');

const generateToken = (userId) => {
  return jwt.sign({ userId }, config.jwtSecret, { expiresIn: '1h' });
};

const authController = {
    // User signUp
  signUp: async (req, res) => {
    try {
      const { name, email, password, photo, inviteCodeParent, inviteCodeTeacher } = req.body;
      const role = inviteCodeParent ? 'parent' : (inviteCodeTeacher ? 'teacher' : 'admin');
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
        name,
        email,
        password: hashedPassword,
        photo,
        role,
        inviteCodeParent,
        inviteCodeTeacher,
      });

      const token = generateToken(user.id);

      res.status(201).json({ user, token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // User Login
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const token = generateToken(user.id);

      res.status(200).json({ user, token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = authController;
