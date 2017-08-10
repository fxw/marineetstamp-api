'use strict';

var url = require('url');


var Totals = require('./TotalsService');


module.exports.computeCartTotal = function computeCartTotal (req, res, next) {
  Totals.computeCartTotal(req.swagger.params, res, next);
};
