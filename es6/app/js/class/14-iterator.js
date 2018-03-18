{
  let arr = ['hello', 'world'];
  let map = arr[Symbol.iterator]();

  console.info(map.next());
  console.info(map.next());
  console.info(map.next());
}

{
  let obj = {
    start: [1, 3, 2],
    end: [7, 9, 8],
    [Symbol.iterator]() {
      let index = 0;
      let arr = this.end.concat(this.start);
      let len = arr.length;

      return {
        next() {
          if (index < len) {
            return {
              value: arr[index++],
              done: false
            };
          } else {
            return {
              value: arr[index++],
              done: true
            }
          }
        }
      }
    }
  };

  for (let key of obj) {
    console.info(key);
  }
}

{
  let arr = ['hello', 'world'];
  for (let value of arr) {
    console.info('value', value);
  }
}
