const Sequelize = require('sequelize');
const sequelize = require('../config/sqlConnection');
const User = require('./user');

const School = sequelize.define('school', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    photo: {
        type: Sequelize.STRING
    }
});

School.hasMany(User, { foreignKey: 'schoolId' });

module.exports = School;