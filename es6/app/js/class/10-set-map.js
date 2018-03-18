{
  let list = new Set();
  list.add(5);
  list.add(7);
  console.info(list.size);
}

{
  let arr = [1, 2, 3, 4, 4, 5];
  let list = new Set(arr);
  // arr = Array.from(list);
  console.info(list);
  // console.info(arr);
}

{
  let list = new Set();
  list.add(1);
  list.add(2);
  list.add(1);
  console.info('list', list);
}

{
  let arr = ['add', 'delete', 'clear', 'has'];
  let list = new Set(arr);

  console.info('has', list.has('add'));
  console.info('delete', list.delete('add'), list);
  list.clear();
  console.info('list', list);
}

{
  let arr = ['add', 'delete', 'clear', 'has'];
  let list = new Set(arr);

  for (let key of list.keys()) {
    console.info('keys', key);
  }

  for (let value of list.values()) {
    console.info('value', value);
  }

  for (let value of list) {
    console.info('value', value);
  }

  for (let [key, value] of list.entries()) {
    console.info('entries', key, value);
  }

  list.forEach(function (item) {
    console.log(item);
  });
}

// weakset only supports objects
{
  let weakList = new WeakSet();
  let args = {};
  weakList.add(args);
  console.info('weakList', weakList);
}

{
  let map = new Map();
  let arr = ['123'];

  map.set(arr, 456)
  console.info('map', map, map.get(arr));
}

{
  let map = new Map([['a', 123], ['b', 456]]);
  console.info('map args', map);
  console.info('size', map.size);
  console.info('delete', map.delete('a'), map);
  console.info('clear', map.clear(), map);
}

{
  let weakMap = new WeakMap();
  let o = {};
  // let o = 'o';  // TypeError: Invalid value used as weak map key
  weakMap.set(o, 123);
  console.info('weakmap', weakMap.get(o));
}

{
  // compare data structure 
  let map = new Map();
  let arr = [];

  // add
  map.set('t', 1);
  arr.push({ t: 1 });
  console.info('map-array', map, arr);

  // query
  let map_exist = map.has('t');
  let arr_exist = arr.find(item => item.t);
  console.info('map-array', map_exist, arr_exist);

  // update
  map.set('t', 2);
  arr.forEach(item => item.t ? item.t = 2 : '');
  console.info('map-array-modify', map, arr);

  // delete
  map.delete('t');
  let index = arr.findIndex(item => item.t);
  arr.splice(index, 1);
  console.info('map-array-delete', map, arr);
}

{
  let set = new Set();
  let arr = [];

  // add
  set.add({ t: 1 });
  arr.push({ t: 1 });
  console.info('set-array', set, arr);

  // query
  let set_exist = set.has({ t: 1 });  // false, should use "let t = {t:1}; ..has(t)"
  let arr_exist = arr.find(item => item.t);
  console.info('set-array', set_exist, arr_exist);

  // update
  set.forEach(item => item.t ? item.t = 2 : '');
  arr.forEach(item => item.t ? item.t = 2 : '');
  console.info('set-array-modify', set, arr);

  // delete
  set.forEach(item => item.t ? set.delete(item) : '');
  let index = arr.findIndex(item => item.t);
  arr.splice(index, 1);
  console.info('set-array-delete', set, arr);
}

{
  let item = { t: 1 };
  let map = new Map();
  let set = new Set();
  let obj = {};

  // add
  map.set('t', 1);
  set.add(item);
  obj['t'] = 1;
  console.info('map-set-obj', obj, map, set);

  // query
  console.info({
    map_exist: map.has('t'),
    set_exist: set.has(item),
    obj_exist: 't' in obj
  })

  // update
  map.set('t', 2);
  item.t = 2;
  obj['t'] = 2;
  console.info('map-set-obj-modify', obj, map, set);

  // delete
  map.delete('t');
  set.delete(item);
  delete obj['t'];
  console.info('map-set-obj-delete', obj, map, set);
}
