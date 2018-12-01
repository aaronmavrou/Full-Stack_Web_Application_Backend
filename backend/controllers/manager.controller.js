const Manager = require('../models/manager.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// controllers/manager.js
exports.manager_create = function (req, res) {
    let manager = new Manager(
        {
            email: req.body.email
        }
    );

    manager.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json({message:'Manager Created successfully'})
    })
};

// controllers/manager.controller.js
exports.manager_details = function (req, res) {
    Manager.findById(req.params.id, function (err, manager) {
        if (err) return next(err);
        res.json(manager);
    })
};

exports.manager_updateQuantity = function (req, res) {
    Manager.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, manager) {
        if (err) return next(err);
        res.json({message:'Manager udpated.'});
    });
};

exports.manager_updateTaxRate = function (req, res) {
    Manager.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, manager) {
        if (err) return next(err);
        res.json({message:'Manager udpated.'});
    });
};

exports.manager_delete = function (req, res) {
    Manager.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.json({message:'Deleted successfully!'});
    })
};

exports.manager_getall = function (req, res){
        Manager.find(function(err, items) {
            if (err)
                res.send(err);
                
            res.json(items);
    });
}