{
  let obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  };

  let monitor = new Proxy(obj, {
    // intercept reading object property
    get(target, key) {
      console.info(key);
      return target[key].replace('2017', '2018');
    },

    // xx == yy;
    set(target, key, value) {
      if (key === 'name') {
        return target[key] = value;
      } else {
        return target[key];
      }
    },

    // in
    has(target, key) {
      if (key === 'name') {
        return target[key];
      } else {
        return false;
      }
    },

    // delete
    deleteProperty(target, key) {
      if (key.indexOf('_') === 0) {
        delete target[key];
        return true;
      } else {
        return target[key];
      }
    },

    // Object.keys, Object.getOwnproperySymbols, Object,getOwnPropertyNames
    ownKeys(target) {
      return Object.keys(target).filter(item => item !== 'time');
    }
  });

  console.info('get', monitor.time);
  monitor.time = '2018';
  monitor.name = 'jzhangs';
  // console.log('set', monitor.name, monitor); // error on node.js, but ok on Chrome
  console.info('has', 'name' in monitor, 'time' in monitor);

  // delete monitor.time;
  // console.info('delete', monitor.time);
  // delete monitor._r;
  // console.info('delete', monitor);

  console.info('ownKeys', Object.keys(monitor));
}

{
  let obj = {
    time: '2017-03-11',
    name: 'net',
    _r: 123
  };

  console.info('Reflect get', Reflect.get(obj, 'time'));
  Reflect.set(obj, 'name', 'jzhangs');
  console.info(obj);
  console.info('has', Reflect.has(obj, 'name'));
}

{
  function validator(target, validator) {
    return new Proxy(target, {
      _validator: validator,
      set(target, key, value, proxy) {
        if (target.hasOwnProperty(key)) {
          let va = this._validator[key];
          if (!!va(value)) {
            return Reflect.set(target, key, value, proxy);
            // return target[key] = value;
          } else {
            throw new Error(`can't set ${key} to ${value}`);
          }
        } else {
          throw new Error(`${key} not exist`);
        }
      }
    })
  }

  const personValidators = {
    name(val) {
      return typeof val === 'string';
    },

    age(val) {
      return typeof val === 'number' && val > 18;
    }
  }

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      return validator(this, personValidators);
    }
  }

  const lilei = new Person('lilei', 19);
  console.info(lilei);

  lilei.age = 20;
  lilei.name = 'jzhangs';
  console.info(lilei);
}

{
  // es3, es5
  var Person = function() {
    var data = {
      name: 'es3',
      sex: 'male',
      age: 15
    };

    this.get = function(key) {
      return data[key];
    };

    this.set = function(key, value) {
      if (key !== 'sex') {
        data[key] = value;
      }
    }
  };

  var person = new Person();
  console.info({name: person.get('name'), sex: person.get('sex'), age: person.get('age')});
  person.set('name', 'es3-cname');
  console.info({name: person.get('name'), sex: person.get('sex'), age: person.get('age')});
  person.set('sex', 'female');
  console.info({name: person.get('name'), sex: person.get('sex'), age: person.get('age')});
}

{
  var person = {
    name: 'es5',
    age: 15
  };
  Object.defineProperty(person, 'sex', {
    writable: false,
    value: 'male',
    enumerable: true
  });

  console.info(person);

  person.name = 'jzhangs';
  console.info(person);

  person.sex = 'female';
  console.info(person);
}

{
  let Person = {
    name: 'es6',
    sex: 'male',
    age: 15
  };

  let person = new Proxy(Person, {
    set(target, key, value) {
      if (key !== 'sex') {
        target[key] = value;
      }
    }
  });

  console.info(person);
  person.name = 'jzhangs';
  console.info(person);
  person.sex = 'female';
  console.info(person);
}
