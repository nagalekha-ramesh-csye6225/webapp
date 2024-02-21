const { findUserByUsername } = require('../repositories/userRepository');

async function checkUserAlreadyExists(req, res, next) {
    try{
        const username = req.body.username;

        const existingUser = await findUserByUsername(username);
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        next();
    } catch(error) {
        if(error.name && error.name === 'SequelizeConnectionRefusedError'){
            console.error('Database connection error: ', error);
            return res.status(503).send();
        }
        else{
            console.error('Error checking if user exists:', error);
            res.status(500).json({ message: 'Internal server error' });
        }  
    }
}

module.exports = checkUserAlreadyExists;