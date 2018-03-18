{
  // generator basic definition
  // 1. function* 
  // 2. yield
  let tell = function* () {
    yield 'a';
    yield 'b';
    return 'c';
  };

  let k = tell();
  console.info(k.next());
  console.info(k.next());
  console.info(k.next());
  console.info(k.next());
}

// {
//   let obj = {};
//   obj[Symbol.iterator] = function* () {
//     yield 1;
//     yield 2;
//     yield 3;
//   };

//   for (let value of obj) {
//     console.log('value', value);
//   }
// }

// {
//   let state = function* () {
//     while (1) {
//       yield 'A';
//       yield 'B';
//       yield 'C';
//     }
//   }

//   let status = state();
//   console.info(status.next());
//   console.info(status.next());
//   console.info(status.next());
//   console.info(status.next());
//   console.info(status.next());
// }

{
  // let state = async function () {
  //   while (1) {
  //     await 'A';
  //     await 'B';
  //     await 'C';
  //   }
  // }

  // TypeError: status.next is not a function
  // let status = state();
  // console.info(status.next());
  // console.info(status.next());
  // console.info(status.next());
  // console.info(status.next());
  // console.info(status.next());
}

{
  let draw = function(count) {
    console.info(`${count} draw left`);
  };

  function* residue(count) {
    while (count > 0) {
      count--;
      yield draw(count);
    }
  }

  let start = residue(5);
  let btn = document.createElement('button');
  btn.id = 'start';
  btn.textContent = 'draw';
  btn.addEventListener('click', () => { start.next();});
  document.body.appendChild(btn);
}

{
  // 1. long poll, timer ? 2. web socket

  function* ajax() {
    yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({code: 0});
      }, 200);
    });
  }

  let pull = function() {
    let generator = ajax();
    let step = generator.next();
    step.value.then((d) => {
      if (d.code !== 0) {
        setTimeout(() => {
          console.log('wait');
          pull();
        }, 1000);
      } else {
        console.log(d);
      }
    })
  };

  pull();
}
