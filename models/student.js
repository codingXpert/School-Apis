const Sequelize = require('sequelize');
const sequelize = require('../config/sqlConnection');
const Class = require('./class');

const Student = sequelize.define('student', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    photo: {
        type: Sequelize.STRING
    }
});

Class.belongsTo(School, { foreignKey: 'schoolId' });

module.exports = Student;
