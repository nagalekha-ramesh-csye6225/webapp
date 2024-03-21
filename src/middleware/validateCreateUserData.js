const { validateUsername, validatePassword, validateName } = require('../validators/userValidators')
const logger = require('../utils/logger.js');

const validateCreateUserData = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;

    // Validate if any other field is attempted to be updated
    const invalidFields = Object.keys(req.body).filter(field => !['first_name', 'last_name', 'password', 'username', 'account_created', 'account_updated'].includes(field));
    if (invalidFields.length > 0) {
        logger.error('Invalid field(s) for update: ' + invalidFields.join(', '));
        return res.status(400).json({ message: 'Invalid field(s) for update: ' + invalidFields.join(', ') });
    }
    
    if(username === undefined || password === undefined || first_name === undefined || last_name === undefined){
        logger.error('Missing required fields');
        return res.status(400).send({error: 'Missing required fields'});
    }

    if(username === ""){
        logger.error('Username cannot be null');
        return res.status(400).send({error: 'Username cannot be null'})
    }

    if(password === ""){
        logger.error('Password cannot be null');
        return res.status(400).send({error: 'Password cannot be null'})
    }

    if(first_name === ""){
        logger.error('First Name cannot be null');
        return res.status(400).send({error: 'First Name cannot be null'})
    }

    if(last_name === ""){
        logger.error('Last Name cannot be null');
        return res.status(400).send({error: 'Last Name cannot be null'})
    }

    if(username.length < 1){
        logger.error('Username should be of minimum length : 1');
        return res.status(400).send({error: 'Username should be of minimum length : 1'})
    }

    if(password.length < 8){
        logger.error('Password should be atleast 8 characters long');
        return res.status(400).send({error: 'Password should be atleast 8 characters long'})
    }

    if(first_name.length < 1){
        logger.error('First Name should be of minimum length : 1');
        return res.status(400).send({error: 'First Name should be of minimum length : 1'})
    }

    if(last_name.length < 1){
        logger.error('Last Name should be of minimum length : 1');
        return res.status(400).send({error: 'Last Name should be of minimum length : 1'})
    }

    if(!validateUsername(username)){
        logger.error('Username not in right format');
        return res.status(400).send({error: 'Username not in right format'});
    }

    if(!validatePassword(password)){
        logger.error('Password not in right format');
        return res.status(400).send({error: 'Password not in right format'});
    }

    if(!validateName(first_name)){
        logger.error('First name not in right format');
        return res.status(400).send({error: 'First name not in right format'});
    }

    if(!validateName(last_name)){
        logger.error('Last name not in right format');
        return res.status(400).send({error: 'Last name not in right format'});
    }

    next();
}

module.exports = validateCreateUserData;