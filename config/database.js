const Sequelize = require('sequelize');

const sequelize = new Sequelize('assignment_01', 'cloud_user', '1234', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = { sequelize };