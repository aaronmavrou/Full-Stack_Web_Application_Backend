const Comment = require('../models/comment.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

// controllers/comments.js
exports.comment_create = function (req, res) {
    let comment = new Comment(
        {
            name: req.body.name,
            theProduct: req.body.theProduct,
            rating: req.body.rating,
            comment: req.body.comment,
            thevis: req.body.thevis
        }
    );

    comment.save(function (err) {
        if (err) {
            return next(err);
        }
        res.json({message:'Comment Created successfully'})
    })
};

// controllers/comments.controller.js
exports.comment_details = function (req, res) {
    Comment.findById(req.params.id, function (err, comment) {
        if (err) return next(err);
        res.json(comment);
    })
};

exports.comment_updateQuantity = function (req, res) {
    Comment.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, comment) {
        if (err) return next(err);
        res.json({message:'Comment udpated.'});
    });
};

exports.comment_updateTaxRate = function (req, res) {
    Comment.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, comment) {
        if (err) return next(err);
        res.json({message:'Commment udpated.'});
    });
};

exports.comment_delete = function (req, res) {
    Comment.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.json({message:'Deleted successfully!'});
    })
};

exports.comment_getall = function (req, res){
        Comment.find(function(err, items) {
            if (err)
                res.send(err);
                
            res.json(items);
    });
}