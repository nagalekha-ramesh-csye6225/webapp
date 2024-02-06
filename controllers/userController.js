const bcrypt = require('bcrypt');
const { createUser } = require('../repositories/userRepository');
const Sequelize = require('sequelize')

async function createUserAccount(req, res) {
    const { username, password, first_name, last_name } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const newUser = await createUser({
            username: username,
            password: hashedPassword,
            first_name,
            last_name,
            account_created: Sequelize.literal('CURRENT_TIMESTAMP'),
            account_updated: Sequelize.literal('CURRENT_TIMESTAMP')
        });

        // Omit password from the response payload
        delete newUser.dataValues.password;

        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    createUserAccount
};
