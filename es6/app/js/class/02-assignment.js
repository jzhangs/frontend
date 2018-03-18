{
  let a, b, reset;
  [a, b] = [1, 2];
  console.info(a, b);
}

{
  let a, b, rest;
  [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
  console.info(a, b, rest);
}

{
  let a, b;
  ({a, b} = {a: 1, b: 2});
  console.info(a, b);
}

{
  let a, b, c, rest;
  [a, b, c=3] = [1, 2];
  console.info(a, b, c);
}

{
  let a = 1, b = 2;
  [a, b] = [b, a];
  console.info(a, b);
}

{
  function f() {
    return [11, 22];
  }

  let [a, b] = f();
  console.info(a, b);
}

{
  function f() {
    return [1, 2, 3, 4, 5];
  }
  let a, b, c;
  // [a,,,b] = f();
  [a, ...b] = f();
  console.info(a, b);
}

{
  let o = { p: 42, q: true};
  let {p, q} = o;
  console.info(p, q);
}

{
  let {a = 10, b = 5} = { a: 3};
  console.info(a, b);
}

{
  let metaData = {
    title: 'abc',
    test: [{
      title: 'test',
      desc: 'description'
    }]
  };
  let {title: esTitle, test:[{title: cnTitle}]} = metaData;
  console.info(esTitle, cnTitle);
}
