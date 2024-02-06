const express = require('express');
const validateUser = require('../middleware/checkUserAlreadyExists');
const validateCreateUserData = require('../middleware/validateCreateUserData')
const { createUserAccount } = require('../controllers/userController');
const handleMethodNotAllowed = require('../middleware/handleMethodNotAllowed')

const router = express.Router();

router.post('/', validateCreateUserData, validateUser, createUserAccount);

router.get('/', handleMethodNotAllowed);
router.put('/', handleMethodNotAllowed);
router.patch('/', handleMethodNotAllowed);
router.delete('/', handleMethodNotAllowed);
router.head('/', handleMethodNotAllowed);
router.options('/', handleMethodNotAllowed);


module.exports = router;
