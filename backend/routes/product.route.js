const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/product.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', product_controller.test);
module.exports = router;

router.post('/usingProducts', product_controller.product_create);

router.get('/usingProducts', product_controller.product_getall);

router.get('/oneItem/:id', product_controller.product_details);

router.put('/updateProduct/:id', product_controller.product_updateQuantity);

router.put('/updateTaxRate/:id', product_controller.product_updateTaxRate);

router.delete('/deleteProduct/:id', product_controller.product_delete);