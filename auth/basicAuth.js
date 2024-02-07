const bcrypt = require('bcrypt');
const User = require('../models/user')
const { findUserByUsername } = require('../repositories/userRepository')

const authenticateToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        res.setHeader('WWW-Authenticate', 'Basic');
        return res.status(401).send();
    }

    //enforcing Basic Auth
    if(!authHeader.startsWith('Basic')){
        res.setHeader('WWW-Authenticate', 'Basic');
        return res.status(401).send();
    }

    const auth = new Buffer.from(authHeader.split(' ')[1],'base64').toString('ascii').split(':');
    const username = auth[0];
    const password = auth[1];

    if(!username || !password){
        return res.status(401).send();
    }

    try{
        //retrieve user from the database based on username
        const user = await findUserByUsername(username);

        if (user === null) {
            // If user not found, return 401 Unauthorized
            return res.status(401).send({ message: 'Unauthorized: User not found' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password );

        if (!passwordMatch) {
            // If password doesn't match, return 401 Unauthorized

            return res.status(401).json({ message: 'Unauthorized: Invalid credentials' });
        }  

        req.user = user;

        next();
    } catch (error) {
        if(error.name && error.name === 'SequelizeConnectionRefusedError'){
            console.error('Database connection error: ', error);
            return res.status(503).send();
        }
        else{
            console.error('Error authenticating user:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }        
    }
}
module.exports = { authenticateToken }