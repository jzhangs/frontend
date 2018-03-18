{
  let ajax = function (callback) {
    console.info('run');
    setTimeout(function () {
      callback && callback.call();
    }, 1000);
  };

  ajax(function () {
    console.info('timeout1');
  });
}

// traiditional callback solution,
// 1. complacated callbacks,
// 2. hard to read and maintance 

{
  let ajax = function () {
    console.info('run2');
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve();
      }, 1000);
    });
  }

  ajax().then(function () {
    console.log('promise', 'timeout2');
  });
}

{
  let ajax = function () {
    console.info('run3');
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve();
      }, 1000);
    });
  };

  ajax().then(function () {
    console.info('timeout3 - 1');
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve();
      }, 2000);
    });
  }).then(function () {
    console.info('timeout3 - 2');
  })
}

{
  let ajax = function (num) {
    console.info('run4');
    return new Promise(function (resolve, reject) {
      if (num > 5) {
        resolve();
      } else {
        throw new Error('error');
      }
    })
  };

  ajax(6).then(function () {
    console.info('log', 6);
  }).catch(function (err) {
    console.log('catch', err);
  });

  ajax(3).then(function () {
    console.info('log', 3);
  }).catch(function (err) {
    console.log('catch', err);
  });
}

{
  // load page after all images loaded
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img');
      img.src = src;
      img.onload = function () {
        reslove(img);
      };
      img.onerror = function (err) {
        reject(err);
      };
    })
  }

  function showImgs(imgs) {
    imgs.forEach(function (img) {
      document.body.appendChild(img);
    })
  }

  Promise.all([
    loadImg('img1'),
    loadImg('img2'),
    loadImg('img3')
  ]).then(showImgs);
}

{
  // load one image after one of them loaded
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement('img');
      img.src = src;
      img.onload = function () {
        reslove(img);
      };
      img.onerror = function (err) {
        reject(err);
      };
    })
  }

  function showImgs(img) {
    let p = document.createElement('p');
    p.appendChild(img);
    document.body.appendChild(p);
  }

  Promise.race([
    loadImg('img1'),
    loadImg('img2'),
    loadImg('img3')
  ]).then(showImgs);
}
