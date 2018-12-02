const User = require('../models/user.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// controllers/user.js
exports.user_create = function (req, res) {
    let user = new User(
        {
            email: req.body.email,
            isActivated: req.body.isActivated,
        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json({message:'User Created successfully'})
    })
};

// controllers/user.controller.js
exports.user_details = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return next(err);
        res.json(user);
    })
};

exports.user_updateQuantity = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.json({message:'User udpated.'});
    });
};

exports.user_updateTaxRate = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.json({message:'User udpated.'});
    });
};

exports.user_delete = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.json({message:'Deleted successfully!'});
    })
};

exports.user_getall = function (req, res){
        User.find(function(err, items) {
            if (err)
                res.send(err);
                
            res.json(items);
    });
}