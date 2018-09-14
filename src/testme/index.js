var dependonme = require('../dependonme');
var dependonme_functions = require('../dependonme_functions');
var dependonme_functions_options = require('../dependonme_functions_options')();

function callme_a() {
  // NO-OP
}

function callme_b() {
  dependonme_functions.woot();
}

function callme_c() {
  dependonme_functions_options.woot();
}

module.exports = {
    callme_a,
    callme_b,
    callme_c
  };
