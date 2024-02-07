const { validateUsername, validatePassword, validateName } = require('../validators/userValidators')

const validateUpdateUserData = async (req, res, next) => {
    // Check if the request body contains the fields to be updated
    const { first_name, last_name, password } = req.body;
    if (first_name === undefined && last_name === undefined && password === undefined) {
        return res.status(400).json({ message: 'At least one field to update must be provided' });
    }

    // Validate if any other field is attempted to be updated
    const invalidFields = Object.keys(req.body).filter(field => !['first_name', 'last_name', 'password'].includes(field));
    if (invalidFields.length > 0) {
        return res.status(400).json({ message: 'Invalid field(s) for update: ' + invalidFields.join(', ') });
    }

    if(first_name === ""){
        return res.status(400).json({message: 'First name cannot be null'});
    }

    if(last_name === ""){
        return res.status(400).send({error: 'Last Name cannot be null'})
    }

    if(password === ""){
        return res.status(400).send({error: 'Password cannot be null'})
    }

    if(!validateName(first_name)){
        return res.status(400).send({error: 'First name not in right format'});
    }

    if(!validateName(last_name)){
        return res.status(400).send({error: 'Last name not in right format'});
    }

    if(!validatePassword(password)){
        return res.status(400).send({error: 'Password not in right format'});
    }

    next();

}

module.exports = validateUpdateUserData;