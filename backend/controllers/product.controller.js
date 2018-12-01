const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// controllers/products.js
exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price,
            quantity: req.body.quantity,
            myDescription: req.body.myDescription,
            rating: req.body.rating
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json({message:'Product Created successfully'})
    })
};

// controllers/products.controller.js
exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.json(product);
    })
};

exports.product_updateQuantity = function (req, res) {
    console.log("we got here    " + req.params.id);
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.json({message:'Product udpated.'});
    });
};

exports.product_updateTaxRate = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.json({message:'Product udpated.'});
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.json({message:'Deleted successfully!'});
    })
};

exports.product_getall = function (req, res){
        Product.find(function(err, items) {
            if (err)
                res.send(err);
                
            res.json(items);
    });
}