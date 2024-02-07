const express = require('express');
const validateUser = require('../middleware/checkUserAlreadyExists');
const validateCreateUserData = require('../middleware/validateCreateUserData')
const { createUserAccount, getUserAccountDetails, updateUserAccountDetails } = require('../controllers/userController');
const handleMethodNotAllowed = require('../middleware/handleMethodNotAllowed')
const { authenticateToken } = require('../auth/basicAuth')
const validateNoQueryParams = require('../middleware/validateNoQueryParams')
const validateUpdateUserData = require('../middleware/validateUpdateUserData')

const router = express.Router();

// TODO
// we need not handle individual routes like this
// rather use app.use("*")
// router.get('/', handleMethodNotAllowed);
// router.put('/', handleMethodNotAllowed);
// router.patch('/', handleMethodNotAllowed);
// router.delete('/', handleMethodNotAllowed);
// router.head('/', handleMethodNotAllowed);
// router.options('/', handleMethodNotAllowed);

router.post('/', validateNoQueryParams, validateCreateUserData, validateUser, createUserAccount);

// router.post('/self', handleMethodNotAllowed);
// router.patch('/self', handleMethodNotAllowed);
// router.delete('/self', handleMethodNotAllowed);
// router.head('/self', handleMethodNotAllowed);
// router.options('/self', handleMethodNotAllowed);

// TODO Intercahnge the middleware calls to avoid unnecessary calls to DB with bad query or body
router.get('/self', authenticateToken, validateNoQueryParams, getUserAccountDetails);
router.put('/self', authenticateToken, validateNoQueryParams, validateUpdateUserData, updateUserAccountDetails);

module.exports = {router;
