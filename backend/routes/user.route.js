const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const user_controller = require('../controllers/user.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', user_controller.test);
module.exports = router;

router.post('/create', user_controller.user_create);

router.get('/getall', user_controller.user_getall);

router.get('/oneItem/:id', user_controller.user_details);

router.put('/updateUser/:id', user_controller.user_updateQuantity);

router.put('/updateTaxRate/:id', user_controller.user_updateTaxRate);

router.delete('/delete/:id', user_controller.user_delete);