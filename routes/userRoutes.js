const express = require('express');
const validateUser = require('../middleware/checkUserAlreadyExists');
const validateCreateUserData = require('../middleware/validateCreateUserData')
const { createUserAccount, getUserAccountDetails } = require('../controllers/userController');
const handleMethodNotAllowed = require('../middleware/handleMethodNotAllowed')
const { authenticateToken } = require('../auth/basicAuth')

const router = express.Router();

router.get('/', handleMethodNotAllowed);
router.put('/', handleMethodNotAllowed);
router.patch('/', handleMethodNotAllowed);
router.delete('/', handleMethodNotAllowed);
router.head('/', handleMethodNotAllowed);
router.options('/', handleMethodNotAllowed);

router.post('/', validateCreateUserData, validateUser, createUserAccount);

router.post('/self', handleMethodNotAllowed);
router.put('/self', handleMethodNotAllowed);
router.patch('/self', handleMethodNotAllowed);
router.delete('/self', handleMethodNotAllowed);
router.head('/self', handleMethodNotAllowed);
router.options('/self', handleMethodNotAllowed);

router.get('/self', authenticateToken, getUserAccountDetails);


module.exports = router;
