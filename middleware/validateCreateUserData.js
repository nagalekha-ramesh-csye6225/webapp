const { validateUsername } = require('../validators/userValidators')

const validateCreateUserData = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;

    // TODO
    // suppose if i pass another key in payload, ex country
    //what are we supposed to do for this? throw error or ignore
    
    if(username === undefined || password === undefined || first_name === undefined || last_name === undefined){
        return res.status(400).send({error: 'Missing required fields'});
    }

    if(username === ""){
        return res.status(400).send({error: 'Username cannot be null'})
    }

    if(password === ""){
        return res.status(400).send({error: 'Password cannot be null'})
    }

    if(first_name === ""){
        return res.status(400).send({error: 'First Name cannot be null'})
    }

    if(last_name === ""){
        return res.status(400).send({error: 'Last Name cannot be null'})
    }

    if(!validateUsername(username)){
        return res.status(400).send({error: 'Username not in right format'});
    }

    next();
}

module.exports = validateCreateUserData;