var ProductModel = require('../models/ProductModel');

let controller = {
    all: function(req, res){
        ProductModel.find({}).lean().exec(function(err, products){
            if(err){
                return res.json([]);
            } else {
                return res.json(products);
            }
        });
    }
}

module.exports = controller;