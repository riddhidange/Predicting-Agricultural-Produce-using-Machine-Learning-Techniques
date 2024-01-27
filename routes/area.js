const express = require('express');
const router = express.Router();

const areaController = require('../controller/area_controller');

router.get('/', areaController.area)

module.exports = router; 