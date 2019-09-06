const express = require('express');
const router = express.Router();
const genController = require('../controllers/genController');

router.get('/', genController.getHomePage);


module.exports = router;