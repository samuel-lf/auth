var express = require('express');
var router = express.Router();
var ProductController = require('../controllers/ProductController');
var PersonController = require('../controllers/PersonController');

router.get('/people', PersonController.all);
router.get('/products', ProductController.all);

module.exports = router;