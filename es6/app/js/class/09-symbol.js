{
  let a1 = Symbol();
  let a2 = Symbol();
  console.info(a1 === a2); // false;

  let a3 = Symbol.for('a3');
  let a4 = Symbol.for('a3');
  console.info(a3 === a4);
}

{
  let a1 = Symbol.for('abc');
  console.info(typeof a1);
  // let a1 = 'abc';
  let obj = {
    [a1]: '123',
    abc: 345,
    c: 456
  };
  console.info('obj', obj);

  for (let [key, value] of Object.entries(obj)) {
    console.info('let of', key, value);
  }

  Object.getOwnPropertySymbols(obj).forEach(function(item) {
    console.info(obj[item]);
  });

  Reflect.ownKeys(obj).forEach(function(item) {
    console.info('ownkeys', item, obj[item]);
  });
}
