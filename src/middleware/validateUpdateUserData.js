const { validatePassword, validateName } = require('../validators/userValidators')
const logger = require('../utils/logger.js');

const validateUpdateUserData = async (req, res, next) => {
    // Validate if any other field is attempted to be updated
    const invalidFields = Object.keys(req.body).filter(field => !['first_name', 'last_name', 'password'].includes(field));
    if (invalidFields.length > 0) {
        logger.error('Invalid field(s) for update: ' + invalidFields.join(', '));
        return res.status(400).json({ message: 'Invalid field(s) for update: ' + invalidFields.join(', ') });
    }

    // Check if the request body contains the fields to be updated
    const { first_name, last_name, password } = req.body;
    if (first_name === undefined && last_name === undefined && password === undefined) {
        logger.error('At least one field to update must be provided');
        return res.status(400).json({ error: 'At least one field to update must be provided' });
    }

    if(first_name === ""){
        logger.error('First name cannot be null');
        return res.status(400).json({error: 'First name cannot be null'});
    }

    if(last_name === ""){
        logger.error('Last name cannot be null');
        return res.status(400).send({error: 'Last Name cannot be null'})
    }

    if(password === ""){
        logger.error('Password cannot be null');
        return res.status(400).send({error: 'Password cannot be null'})
    }

    if(password!== undefined  && password.length < 8){
        logger.error('Password should be atleast 8 characters long');
        return res.status(400).send({error: 'Password should be atleast 8 characters long'})
    }

    if(first_name!==undefined && first_name.length < 1){
        logger.error('First Name should be of minimum length : 1');
        return res.status(400).send({error: 'First Name should be of minimum length : 1'})
    }

    if(last_name!==undefined && last_name.length < 1){
        logger.error('Last Name should be of minimum length : 1');
        return res.status(400).send({error: 'Last Name should be of minimum length : 1'})
    }

    if(first_name!== undefined && !validateName(first_name)){
        logger.error('First name not in right format');
        return res.status(400).send({error: 'First name not in right format'});
    }

    if(last_name!== undefined && !validateName(last_name)){
        logger.error('Last name not in right format');
        return res.status(400).send({error: 'Last name not in right format'});
    }

    if(password!== undefined && !validatePassword(password)){
        logger.error('Password not in right format');
        return res.status(400).send({error: 'Password not in right format'});
    }

    next();

}

module.exports = validateUpdateUserData;