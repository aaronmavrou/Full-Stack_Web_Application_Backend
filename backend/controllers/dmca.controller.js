const Dmca = require('../models/dmca.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// controllers/dmca.js
exports.dmca_create = function (req, res) {
    let dmca = new Dmca(
        {
            type: req.body.type,
            info: req.body.info,
        }
    );

    dmca.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json({message:'Dmca Created successfully'})
    })
};

// controllers/dmca.controller.js
exports.dmca_details = function (req, res) {
    Dmca.findById(req.params.id, function (err, dmca) {
        if (err) return next(err);
        res.json(dmca);
    })
};

exports.dmca_updateQuantity = function (req, res) {
    Dmca.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, dmca) {
        if (err) return next(err);
        res.json({message:'Dmca udpated.'});
    });
};

exports.dmca_updateTaxRate = function (req, res) {
    Dmca.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, dmca) {
        if (err) return next(err);
        res.json({message:'Dmca udpated.'});
    });
};

exports.dmca_delete = function (req, res) {
    Dmca.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.json({message:'Deleted successfully!'});
    })
};

exports.dmca_getall = function (req, res){
        Dmca.find(function(err, items) {
            if (err)
                res.send(err);
                
            res.json(items);
    });
}