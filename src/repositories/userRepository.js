const User = require('../models/user');
const logger = require('../utils/logger.js');

async function createUser(userData) {
    const newUser = await User.create(userData);
    logger.debug('New user created: ' +  JSON.stringify(newUser, null, 2));
    return newUser;
}

async function findUserByUsername(email) {
    const user = await User.findOne({ where: { username: email } });
    logger.debug('User found: ' +  JSON.stringify(user, null, 2));
    return user;
}

async function updateUserById(userId, userData) {
    // Update user information by ID
    const [, updatedUser] = await User.update(userData, {
        where: { id: userId },
        returning: true, // Return the updated user object
    });

    // Return the updated user object
    logger.debug('User updated: ' + JSON.stringify(updatedUser, null, 2));
    return updatedUser;
}

module.exports = {
    createUser,
    findUserByUsername,
    updateUserById
};