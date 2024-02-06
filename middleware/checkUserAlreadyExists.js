const { findUserByEmail } = require('../repositories/userRepository');

async function checkUserAlreadyExists(req, res, next) {
    const username = req.body.username;

    const existingUser = await findUserByEmail(username);
    if (existingUser) {
        return res.status(400).json({ message: 'User with this email already exists' });
    }

    next();
}

module.exports = checkUserAlreadyExists;
