const bcrypt = require('bcrypt');
const { createUser, updateUserById, findUserByUsername } = require('../repositories/userRepository');
const Sequelize = require('sequelize')
const logger = require('../utils/logger.js');

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
            // account_created: Sequelize.literal('CURRENT_TIMESTAMP'),
            // account_updated: Sequelize.literal('CURRENT_TIMESTAMP')
        });

        // Omit password from the response payload
        delete newUser.dataValues.password;

        res.status(201).json(newUser);
    } catch (error) {
        if(error.name && error.name === 'SequelizeConnectionRefusedError'){
            logger.error('Database connection error:', error);

            return res.status(503).send();
        }
        else{
            logger.error('Error creating user:', error);
            res.status(500).json({ message: 'Internal server error' });
        }    
    }
}

const getUserAccountDetails= (req, res) => {

    try{
        const userJson = req.user;
        delete userJson.dataValues.password;
    
        res.status(200).json(userJson);
    } catch (error) {
        if(error.name && error.name === 'SequelizeConnectionRefusedError'){
            logger.error('Database connection error:', error);
            return res.status(503).send();
        }
        else{
            logger.error('Error fetching user details:', error);
            res.status(500).json({ message: 'Internal server error' });
        }   
    }
}

const updateUserAccountDetails = async (req, res) => {
    try{
        const authenticatedUser = req.user;
        const { first_name, last_name, password } = req.body;

        // Hash the new password if provided
        let hashedPassword;
        if (password) {
            hashedPassword = await bcrypt.hash(password, 10);
        }

        // Prepare the updated user data
        const updatedUserData = {};
        if (first_name) updatedUserData.first_name = first_name;
        if (last_name) updatedUserData.last_name = last_name;
        if (hashedPassword) updatedUserData.password = hashedPassword;
        updatedUserData.account_updated = new Date();

        // Update user information in the database
        const updatedUser = await updateUserById(authenticatedUser.id, updatedUserData);

        // Return 204 No Content on successful update
        res.status(204).send();

    } catch(error) {
        if(error.name && error.name === 'SequelizeConnectionRefusedError'){
            logger.error('Database connection error:', error);
            return res.status(503).send();
        }
        else{
            logger.error('Error updating user details:', error);
            res.status(500).json({ message: 'Internal server error' });
        }   
    }
}

module.exports = {
    createUserAccount,
    getUserAccountDetails,
    updateUserAccountDetails
};
