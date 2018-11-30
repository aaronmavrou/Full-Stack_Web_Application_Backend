const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const comment_controller = require('../controllers/comment.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', comment_controller.test);
module.exports = router;

router.post('/create', comment_controller.comment_create);

router.get('/getall', comment_controller.comment_getall);

router.get('/oneItem/:id', comment_controller.comment_details);

router.put('/updateQuantity/:id', comment_controller.comment_updateQuantity);

router.put('/updateTaxRate/:id', comment_controller.comment_updateTaxRate);

router.delete('/delete/:id', comment_controller.comment_delete);