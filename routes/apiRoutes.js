const express = require('express');
const healthzController = require('../controllers/controller');
const validateNoPayload = require('../middleware/validateNoPayload');
const validateNoQueryParams = require('../middleware/validateNoQueryParams');
const handleMethodNotAllowed = require('../middleware/handleMethodNotAllowed')
const alterHeaders = require('../middleware/alterHeaders')

const router = express.Router();

//Handling Method Not Allowed Explicitly
router.post('/healthz', alterHeaders, handleMethodNotAllowed);
router.put('/healthz', alterHeaders, handleMethodNotAllowed);
router.patch('/healthz', alterHeaders, handleMethodNotAllowed);
router.delete('/healthz', alterHeaders, handleMethodNotAllowed);
router.head('/healthz', alterHeaders, handleMethodNotAllowed);
router.options('/healthz', alterHeaders, handleMethodNotAllowed);

//Health Check Route Definition
router.get('/healthz', alterHeaders, validateNoPayload, validateNoQueryParams, healthzController.healthCheck);

module.exports = router;