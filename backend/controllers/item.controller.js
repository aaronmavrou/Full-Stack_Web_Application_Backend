const Item = require('../models/item.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// controllers/items.js
exports.item_create = function (req, res) {
    let item = new Item(
        {
            name: req.body.name,
            prodName: req.body.prodName,
            prodQuantity: req.body.prodQuantity
        }
    );

    item.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json({message:'Item Created successfully'})
    })
};

// controllers/items.controller.js
exports.item_details = function (req, res) {
    Item.findById(req.params.id, function (err, item) {
        if (err) return next(err);
        res.json(item);
    })
};

exports.item_updateQuantity = function (req, res) {
    Item.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, item) {
        if (err) return next(err);
        res.json({message:'Item udpated.'});
    });
};

exports.item_updateTaxRate = function (req, res) {
    Item.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, item) {
        if (err) return next(err);
        res.json({message:'Item udpated.'});
    });
};

exports.item_delete = function (req, res) {
    Item.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.json({message:'Deleted successfully!'});
    })
};

exports.item_getall = function (req, res){
        Item.find(function(err, items) {
            if (err)
                res.send(err);
                
            res.json(items);
    });
}