'use strict';

exports.addProducts = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Products)
  **/
  // no response value expected for this operation
  res.end();
}

exports.deleteProducts = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Products)
  **/
    var examples = {};
  examples['application/json'] = {
  "code" : "aeiou",
  "price" : "",
  "name" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getProducts = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Products)
  **/
    var examples = {};
  examples['application/json'] = {
  "code" : "aeiou",
  "price" : "",
  "name" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

