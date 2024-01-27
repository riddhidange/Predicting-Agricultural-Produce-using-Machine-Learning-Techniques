const express = require('express');

const router = express.Router();
const homeController = require('../controller/home_controller');

console.log('router loaded');

router.get('/', homeController.home);
router.use('/discussion', require('./discussion'));
router.use('/area', require('./area'))
router.use('/users', require('./users'));
router.use('/posts', require('./posts'));
router.use('/comments', require('./comments'))

module.exports = router;