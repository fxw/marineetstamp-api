'use strict';

var url = require('url');


var Cart = require('./CartService');


module.exports.addItemToCart = function addItemToCart (req, res, next) {
  Cart.addItemToCart(req.swagger.params, res, next);
};

module.exports.deleteItemsFromCart = function deleteItemsFromCart (req, res, next) {
  Cart.deleteItemsFromCart(req.swagger.params, res, next);
};

module.exports.getItemsFromCart = function getItemsFromCart (req, res, next) {
  Cart.getItemsFromCart(req.swagger.params, res, next);
};
