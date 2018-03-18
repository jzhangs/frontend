{
  function test(x, y = 'world') {
    console.log('default value', x, y);
  }
  test('hello');
  test('hello', 'jzhangs');

  // not allowed, c must have default value
  // function test(x, y = 'world', c) {
}

{
  let x = 'test';
  function test2(x, y = x) {
    console.log('scope', x, y);
  }
  test2();  // undefined undefined

  function test3(c, y = x) {
    console.log('scope', c, y);
  }
  test3('jzhangs');
}

{
  function test(...args) {
    console.info(args);
    for (let v of args) {
      console.info('rest', v);
    }
  }
  test(123, 455);
}

{
  console.info(...[1, 2, 4]);
  console.info('a', ...[1, 2, 4]);
}

{
  let arrow = v => v * 2;
  let arrow2 = () => 5;
  console.info('arrow', arrow(3));
  console.info('arrow2', arrow2());
}

// tail call
{
  function tail(x) {
    console.log('tail', x);
  }

  function fx(x) {
    return tail(x);
  }

  fx(123);
}

{
  var factory = function () {
    this.a = 'a';
    this.b = 'b';
    this.c = {
      a: 'a+',
      b: function () {
        return this.a;
      }
    }
  }
  // function , 'this' is the object called;
  console.info(new factory().c.b());
}

{
  var factory = function () {
    this.a = 'a';
    this.b = 'b';
    this.c = {
      a: 'a+',
      b: () => {
        return this.a;
      }
    }
  }
  // () => {}, 'this' is the object defined;
  console.info(new factory().c.b());
}

{
  function checkParameter() {
    throw new Error('can\'t be empty');
  }

  function f(x = checkParameter(), y = 7, z = 42) {
    return x + y + z;
  }

  console.info(f(1));
  try {
    f()
  } catch (e) {
    console.info(e);
  } finally {

  }
}

{
  // es3, 5
  function f() {
    var arr = Array.prototype.slice.call(arguments);
    var sum = 0;
    arr.forEach(function(item) {
      // sum += item * 1;
      sum += item;
    })
    return sum;
  }
  console.info(f(1,2,3,4,5));
  console.info(f(1,2,3,4,'5'));
}

{
  // es6
  function f(...args) {
    var sum = 0;
    args.forEach(function(item) {
      sum += item * 1;
    })
    return sum;
  }
  console.info(f(1,2,3,4,5));
}
