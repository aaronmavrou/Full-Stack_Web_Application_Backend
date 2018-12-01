const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const collection_controller = require('../controllers/collection.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', collection_controller.test);
module.exports = router;

router.post('/create', collection_controller.collection_create);

router.get('/getall', collection_controller.collection_getall);

router.get('/oneItem/:id', collection_controller.collection_details);

router.put('/updateQuantity/:id', collection_controller.collection_updateQuantity);

router.put('/updateTaxRate/:id', collection_controller.collection_updateTaxRate);

router.delete('/delete/:id', collection_controller.collection_delete);