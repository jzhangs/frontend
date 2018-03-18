// not work on node.js yet

{
  let readonly = function(target, name, descriptor) {
    descriptor.writable = false;
    return descriptor;
  }

  class Test {
    @readonly
    time() {
      return '2017-03-11';
    }
  }

  let test = new Test();
  // test.time = function() {
  //   console.log('reset time');
  // }
  console.info(test.time());
}

{
  function typename(target) {
    target.myname = 'hello';
  }

  @typename
  class Test {

  }
  console.info('class decorator', Test.myname);
  // 3rd lib, core-decorators
  // npm install core-decorators
}
