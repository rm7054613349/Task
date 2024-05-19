const express = require('express');
const router = express.Router();
const { getConfig, updateRemark } = require('../controllers/configurationController');

router.get('/configurations/:id', getConfig);
router.put('/configurations/:id', updateRemark);

module.exports = router;
