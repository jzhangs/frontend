(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.main = factory());
}(this, (function () { 'use strict';

  // src/foo.js
  var foo = 'hello world!';

  // src/main.js
  function main() {
    console.log(foo);
  }

  return main;

})));
