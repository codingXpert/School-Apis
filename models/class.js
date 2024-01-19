const Sequelize = require('sequelize');
const sequelize = require('../config/sqlConnection');
const School = require('./school');

const Class = sequelize.define('class', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Class.belongsTo(School, { foreignKey: 'SchoolId' });

module.exports = Class;