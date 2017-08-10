'use strict';

var url = require('url');


var Products = require('./ProductsService');


module.exports.addProducts = function addProducts (req, res, next) {
  Products.addProducts(req.swagger.params, res, next);
};

module.exports.deleteProducts = function deleteProducts (req, res, next) {
  Products.deleteProducts(req.swagger.params, res, next);
};

module.exports.getProducts = function getProducts (req, res, next) {
  Products.getProducts(req.swagger.params, res, next);
};
