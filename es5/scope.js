console.log(a);
var a = 100;

fn();

function fn(name) {
  // console.info(this);
  // console.info(arguments);
  age = 20;
  console.log(name, age);
  // var age;
}


// var fn = function (name) {
//   age = 20;
//   console.log(name, age);
//   // var age;
// }

// console.info(age);


var a = {
  name : 'A',
  fn: function() {
      console.log(this.name);
  }
}

a.fn()   // this === a
a.fn.call({name: 'B'})  // this === {name: ‘B’ }
var fn1 = a.fn
fn1()    // this === window

function Foo(name) {
  this.name = name;
}

var f = new Foo('zhangsan');

var obj = {
  name: 'AB',
  printName: function() {
    console.log(this.name);
  }
}
obj.printName();

function fn() {
  console.log(this);
}
fn();
