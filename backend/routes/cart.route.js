const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const cart_controller = require('../controllers/cart.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', cart_controller.test);
module.exports = router;

router.post('/create', cart_controller.cart_create);

router.get('/getall', cart_controller.cart_getall);

router.get('/oneItem/:id', cart_controller.cart_details);

router.put('/updateCart/:id', cart_controller.cart_updateQuantity);

router.delete('/delete/:id', cart_controller.cart_delete);