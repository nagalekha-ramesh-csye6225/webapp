const User = require('../models/user');

async function createUser(userData) {
    return await User.create(userData);
}

async function findUserByUsername(email) {
    return await User.findOne({ where: { username: email } });
}

async function updateUserById(userId, userData) {
    // Update user information by ID
    const [, updatedUser] = await User.update(userData, {
        where: { id: userId },
        returning: true, // Return the updated user object
    });

    // Return the updated user object
    return updatedUser;
}

module.exports = {
    createUser,
    findUserByUsername,
    updateUserById
};