 const express = require('express');
 const router = express.Router();
 const ordersControllers = require('../controllers/ordersControllers');
 

 router.post('/addToCart', ordersControllers.addToCart);

 module.exports = router;