const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const manager_controller = require('../controllers/manager.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', manager_controller.test);
module.exports = router;

router.post('/create', manager_controller.manager_create);

router.get('/getall', manager_controller.manager_getall);

router.get('/oneItem/:id', manager_controller.manager_details);

router.put('/updateQuantity/:id', manager_controller.manager_updateQuantity);

router.put('/updateTaxRate/:id', manager_controller.manager_updateTaxRate);

router.delete('/delete/:id', manager_controller.manager_delete);