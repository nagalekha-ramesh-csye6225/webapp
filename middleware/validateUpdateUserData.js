const validateUpdateUserData = async (req, res, next) => {
    // Check if the request body contains the fields to be updated
    const { first_name, last_name, password } = req.body;
    if (!first_name && !last_name && !password) {
        return res.status(400).json({ message: 'At least one field to update must be provided' });
    }

    // Validate if any other field is attempted to be updated
    const invalidFields = Object.keys(req.body).filter(field => !['first_name', 'last_name', 'password'].includes(field));
    if (invalidFields.length > 0) {
        return res.status(400).json({ message: 'Invalid field(s) for update: ' + invalidFields.join(', ') });
    }

    next();

}

module.exports = validateUpdateUserData;