const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const dmca_controller = require('../controllers/dmca.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', dmca_controller.test);
module.exports = router;

router.post('/create', dmca_controller.dmca_create);

router.get('/getall', dmca_controller.dmca_getall);

router.get('/oneItem/:id', dmca_controller.dmca_details);

router.put('/updateDmca/:id', dmca_controller.dmca_updateQuantity);

router.put('/updateTaxRate/:id', dmca_controller.dmca_updateTaxRate);

router.delete('/delete/:id', dmca_controller.dmca_delete);