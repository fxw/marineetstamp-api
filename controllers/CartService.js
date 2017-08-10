'use strict';

exports.addItemToCart = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Cart)
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

exports.deleteItemsFromCart = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Cart)
  **/
    var examples = {};
  examples['application/json'] = {
  "code" : "aeiou",
  "price" : "",
  "name" : "aeiou",
  "items" : 123456789,
  "status" : true
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.getItemsFromCart = function(args, res, next) {
  /**
   * parameters expected in the args:
  * body (Products)
  **/
    var examples = {};
  examples['application/json'] = {
  "code" : "aeiou",
  "price" : "",
  "name" : "aeiou",
  "items" : 123456789,
  "status" : true
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

