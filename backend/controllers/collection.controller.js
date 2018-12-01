const Collection = require('../models/collection.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// controllers/collection.js
exports.collection_create = function (req, res) {
    let collection = new Collection(
        {
            name: req.body.name,
            theDescription: req.body.theDescription,
            theVisibility: req.body.theVisibility,
            ownerName: req.body.ownerName,
        }
    );

    collection.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json({message:'Collection Created successfully'})
    })
};

// controllers/collection.controller.js
exports.collection_details = function (req, res) {
    Collection.findById(req.params.id, function (err, collection) {
        if (err) return next(err);
        res.json(collection);
    })
};

exports.collection_updateQuantity = function (req, res) {
    Collection.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, collection) {
        if (err) return next(err);
        res.json({message:'Collection udpated.'});
    });
};

exports.collection_updateTaxRate = function (req, res) {
    Collection.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, collection) {
        if (err) return next(err);
        res.json({message:'Collection udpated.'});
    });
};

exports.collection_delete = function (req, res) {
    Collection.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.json({message:'Deleted successfully!'});
    })
};

exports.collection_getall = function (req, res){
        Collection.find(function(err, items) {
            if (err)
                res.send(err);
                
            res.json(items);
    });
}