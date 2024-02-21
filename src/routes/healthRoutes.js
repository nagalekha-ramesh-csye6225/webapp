const express = require('express');
const healthzController = require('../controllers/healthzController');
const validateNoPayload = require('../middleware/validateNoPayload');
const validateNoQueryParams = require('../middleware/validateNoQueryParams');
const handleMethodNotAllowed = require('../middleware/handleMethodNotAllowed')
const alterHeaders = require('../middleware/alterHeaders')

const router = express.Router();

//Handling Method Not Allowed Explicitly
router.post('/', alterHeaders, handleMethodNotAllowed);
router.put('/', alterHeaders, handleMethodNotAllowed);
router.patch('/', alterHeaders, handleMethodNotAllowed);
router.delete('/', alterHeaders, handleMethodNotAllowed);
router.head('/', alterHeaders, handleMethodNotAllowed);
router.options('/', alterHeaders, handleMethodNotAllowed);

//Health Check Route Definition
router.get('/', alterHeaders, validateNoPayload, validateNoQueryParams, healthzController.healthCheck);

module.exports = router;