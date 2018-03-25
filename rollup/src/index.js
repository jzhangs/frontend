// import 'babel-polyfill';

function loadImg(src) {
  const promise = new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.onload = function() {
      resolve(img);
    };
    img.onerror = function() {
      reject('fail');
    };
    img.src = src;
  });
  return promise;
}

const src = '//www.imooc.com/static/img/index/logo_new.png';
const result = loadImg(src);
result.then(img => {
  console.info(img.width);
}, () => {
  console.info('failed');
});

result.then(img => {
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
