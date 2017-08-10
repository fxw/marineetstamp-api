'use strict';

exports.computeCartTotal = function(args, res, next) {
  /**
   * parameters expected in the args:
  * promo_code (String)
  **/
    var examples = {};
  examples['application/json'] = {
  "total" : "",
  "current" : "{}",
  "rules" : "aeiou"
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

