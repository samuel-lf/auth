var express = require('express');
var router = express.Router();
var ProductController = require('../controllers/ProductController');
var PersonController = require('../controllers/PersonController');
var AuthController = require('../controllers/AuthController');

router.use(AuthController.check_token);
router.get('/people', PersonController.all);
router.get('/products', ProductController.all);

module.exports = router;