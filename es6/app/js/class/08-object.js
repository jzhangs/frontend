{
  // simple notation
  let o = 1, k = 2;
  let es5 = {
    o: o,
    k: k
  };
  let es6 = {
    o,
    k
  };
  console.info(es5, es6);

  let es5_method = {
    hello: function () {
      console.log('hello');
    }
  };
  let es6_method = {
    hello() {
      console.log('hello');
    }
  };

  console.info(es5_method.hello(), es6_method.hello());
}

{
  let a = 'b';
  let es5_obj = {
    a: 'c',
    b: 'c'
  };

  let es6_obj = {
    [a]: 'c'    // [expression]
  }
  console.info(es5_obj, es6_obj);
}

{
  // new api
  console.info('string', Object.is('abc', 'abc'), 'abc' === 'abc');
  console.info('array', Object.is([], []), [] === []);

  // 1. shallow copy
  // 2. copy own and enumrable property only
  console.info('copy', Object.assign({ a: 'a' }, { b: 'b' }));

  // entries
  let test = { k: 123, o: 456};
  for (let [key, value] of Object.entries(test)) {
    console.log([key, value]);
  }
}

{
  // entended operators
  let { c, x, ...cx} = {a: 'test', b: 'kill', c: 'ddd', d: 'ccc'};
  console.info(c, x, cx);  // ddd undefined { a: 'test', b: 'kill', d: 'ccc' }
}
