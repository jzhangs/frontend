{
  // basic definition and instance of classes
  class Parent {
    constructor(name = 'jzhangs') {
      this.name = name;
    }
  }

  let obj = new Parent('v');
  let obj2 = new Parent();
  console.info('object', obj);
  // console.info('object', obj2);
}

{
  // inheritance
  class Parent {
    constructor(name = 'jzhangs') {
      this.name = name;
    }
  }

  class Child extends Parent {

  }

  console.info('inheritance', new Child());
}

{
  //  pass parameters in inheritance
  class Parent {
    constructor(name = 'jzhangs') {
      this.name = name;
    }
  }

  class Child extends Parent {
    constructor(name = 'child') {
      super(name);
      this.type = 'child';
    }
  }

  console.info('inheritance', new Child('hello'));
}

{
  // getter, setter
  class Parent {
    constructor(name = 'jzhangs') {
      this.name = name;
    }

    get longName() {
      return 'mk' + this.name;
    }

    set longName(value) {
      this.name = value;
    }
  }
  let v = new Parent();
  console.info('getter', v.longName);
  v.longName = 'hello';
  console.info('setter', v.longName);
}

{
  // static methods
  class Parent {
    constructor(name = 'jzhangs') {
      this.name = name;
    }

    static tell() {
      console.log('tell');
    }
  }

  Parent.tell();
}

{
  // static property
  class Parent {
    constructor(name = 'jzhangs') {
      this.name = name;
    }

    static tell() {
      console.log('tell');
    }
  }

  Parent.type = 'test';
  console.info('static property', Parent.type);
}
