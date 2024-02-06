const express = require('express');
const healthzController = require('../controllers/controller');
const validateNoPayload = require('../middleware/validateNoPayload');
const validateNoQueryParams = require('../middleware/validateNoQueryParams');
const handleMethodNotAllowed = require('../middleware/handleMethodNotAllowed')

const router = express.Router();

//Handling Method Not Allowed Explicitly
router.post('/healthz', handleMethodNotAllowed);
router.put('/healthz', handleMethodNotAllowed);
router.patch('/healthz', handleMethodNotAllowed);
router.delete('/healthz', handleMethodNotAllowed);
router.head('/healthz', handleMethodNotAllowed);
router.options('/healthz', handleMethodNotAllowed);

//Health Check Route Definition
router.get('/healthz', validateNoPayload, validateNoQueryParams, healthzController.healthCheck);

module.exports = router;