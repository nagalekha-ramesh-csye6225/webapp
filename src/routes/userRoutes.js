const express = require('express');
const validateUser = require('../middleware/checkUserAlreadyExists');
const validateCreateUserData = require('../middleware/validateCreateUserData')
const { createUserAccount, getUserAccountDetails, updateUserAccountDetails, verifyUserAccount } = require('../controllers/userController');
const handleMethodNotAllowed = require('../middleware/handleMethodNotAllowed')
const { authenticateToken } = require('../auth/basicAuth')
const validateNoQueryParams = require('../middleware/validateNoQueryParams')
const validateUpdateUserData = require('../middleware/validateUpdateUserData')
const alterHeadersForUserEndpoints = require('../middleware/alterHeadersForUserEndpoints')

const router = express.Router();

router.get('/', alterHeadersForUserEndpoints, handleMethodNotAllowed);
router.put('/', alterHeadersForUserEndpoints, handleMethodNotAllowed);
router.patch('/', alterHeadersForUserEndpoints, handleMethodNotAllowed);
router.delete('/', alterHeadersForUserEndpoints, handleMethodNotAllowed);
router.head('/', alterHeadersForUserEndpoints, handleMethodNotAllowed);
router.options('/', alterHeadersForUserEndpoints, handleMethodNotAllowed);

router.post('/', alterHeadersForUserEndpoints, validateNoQueryParams, validateCreateUserData, validateUser, createUserAccount);

router.post('/self', alterHeadersForUserEndpoints, handleMethodNotAllowed);
router.patch('/self', alterHeadersForUserEndpoints, handleMethodNotAllowed);
router.delete('/self', alterHeadersForUserEndpoints, handleMethodNotAllowed);
router.head('/self', alterHeadersForUserEndpoints, handleMethodNotAllowed);
router.options('/self', alterHeadersForUserEndpoints, handleMethodNotAllowed);

router.get('/self', alterHeadersForUserEndpoints, authenticateToken, validateNoQueryParams, getUserAccountDetails);
router.put('/self', alterHeadersForUserEndpoints, authenticateToken, validateNoQueryParams, validateUpdateUserData, updateUserAccountDetails);

router.head('/verify/:id', alterHeadersForUserEndpoints, handleMethodNotAllowed);
router.options('/verify/:id', alterHeadersForUserEndpoints, handleMethodNotAllowed);
router.post('/verify/:id', alterHeadersForUserEndpoints, handleMethodNotAllowed);
router.put('/verify/:id', alterHeadersForUserEndpoints, handleMethodNotAllowed);
router.patch('/verify/:id', alterHeadersForUserEndpoints, handleMethodNotAllowed);
router.delete('/verify/:id', alterHeadersForUserEndpoints, handleMethodNotAllowed);

router.get('/verify/:id', alterHeadersForUserEndpoints, verifyUserAccount);

module.exports = router;