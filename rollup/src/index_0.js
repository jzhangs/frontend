function loadImg(src, callback, fail) {
  var img = document.createElement('img');
  img.onload = function() {
    callback(img);
  };
  img.onerror = function() {
    fail();
  };
  img.src = src;
}

var src = '//www.imooc.com/static/img/index/logo_new.png';
loadImg(src, function(img) {
    console.info(img.width);
  }, function() {
    console.info('failed');
  }
);
