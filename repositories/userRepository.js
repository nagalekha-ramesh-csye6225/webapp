const User = require('../models/user');

async function createUser(userData) {
    return await User.create(userData);
}

async function findUserByEmail(email) {
    return await User.findOne({ where: { username: email } });
}

module.exports = {
    createUser,
    findUserByEmail
};