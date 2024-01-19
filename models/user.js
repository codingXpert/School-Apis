const Sequelize = require('sequelize');
const sequelize = require('../config/sqlConnection');

const User = sequelize.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    photo: {
        type: Sequelize.STRING
    },
    role: {
        type: Sequelize.STRING
    },
    inviteCodeParent: {
        type: Sequelize.STRING
    },
    inviteCodeTeacher: {
        type: Sequelize.STRING
    }
});

module.exports = User