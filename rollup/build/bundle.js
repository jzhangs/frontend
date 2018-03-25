(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  // import 'babel-polyfill';

  function loadImg(src) {
    var promise = new Promise(function (resolve, reject) {
      var img = document.createElement('img');
      img.onload = function () {
        resolve(img);
      };
      img.onerror = function () {
        reject('fail');
      };
      img.src = src;
    });
    return promise;
  }

  var src = '//www.imooc.com/static/img/index/logo_new.png';
  var result = loadImg(src);
  result.then(function (img) {
    console.info(img.width);
  }, function () {
    console.info('failed');
  });

  result.then(function (img) {
    console.info(img.height);
  });

  // var src1 = 'https://www.imooc.com/static/img/index/logo_new.png';
  // var src2 = 'https://img1.mukewang.com/545862fe00017c2602200220-100-100.jpg';

  // const load = async function() {
  //   const result1 = await loadImg(src1);
  //   console.log(result1);
  //   const result2 = await loadImg(src2);
  //   console.log(result2);
  // };
  // load();

})));
