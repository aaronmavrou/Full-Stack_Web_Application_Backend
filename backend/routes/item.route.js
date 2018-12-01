const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const item_controller = require('../controllers/item.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', item_controller.test);
module.exports = router;

router.post('/usingItems', item_controller.item_create);

router.get('/usingItems', item_controller.item_getall);

router.get('/oneItem/:id', item_controller.item_details);

router.put('/updateItem/:id', item_controller.item_updateQuantity);

router.put('/updateTaxRate/:id', item_controller.item_updateTaxRate);

router.delete('/deleteItem/:id', item_controller.item_delete);