const Cart = require('../models/cart.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// controllers/carts.js
exports.cart_create = function (req, res) {
    let cart = new Cart(
        {
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity
        }
    );

    cart.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json({message:'cart Created successfully'})
    })
};

// controllers/carts.controller.js
exports.cart_details = function (req, res) {
    Cart.findById(req.params.id, function (err, cart) {
        if (err) return next(err);
        res.json(cart);
    })
};

exports.cart_updateQuantity = function (req, res) {
    Cart.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, cart) {
        if (err) return next(err);
        res.json({message:'cart udpated.'});
    });
};

exports.cart_updateTaxRate = function (req, res) {
    Cart.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, cart) {
        if (err) return next(err);
        res.json({message:'cart udpated.'});
    });
};

exports.cart_delete = function (req, res) {
    Cart.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.json({message:'Deleted successfully!'});
    })
};

exports.cart_getall = function (req, res){
        Cart.find(function(err, items) {
            if (err)
                res.send(err);
                
            res.json(items);
    });
}