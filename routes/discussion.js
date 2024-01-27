const express = require('express');
const router = express.Router();

const discussionController = require('../controller/discussion_controller');

router.get('/', discussionController.discussion)

module.exports = router; 