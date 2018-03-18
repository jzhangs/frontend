{
  let arr = Array.of(3, 4, 7, 9, 11);
  console.info('arr', arr);

  let empty = Array.of();
  console.info('empty', empty);
}

{
  // let p = document.querySelectorAll('p');
  // let pArr = Array.from(p);
  // pArr.forEach(function(item) {
  //   console.info(item.textContent);
  // });

  console.info(Array.from([1, 3, 5], item => item * 2));
}

{
  console.info('fill-7', [1, 'a', undefined].fill(7));
  console.info('fill, pos', ['a', 'b', 'c', 'd', 'e'].fill(7, 1, 3));
}

{
  for (let index of ['1', 'c', 'ks'].keys()) {
    console.info('keys', index);
  }

  // not work yet
  // for (let value of ['1', 'c', 'ks'].values()) {
    // console.info(value);
  // }

  for (let [index, value] of ['1', 'c', 'ks'].entries()) {
    console.info('values', index, value);
  }
}

{
  console.info([1,2,3,4,5].copyWithin(0, 3, 4));
}

{
  console.info([1,2,3,4,5,6].find(function(item) {
    return item > 3;
  }));

  console.info([1,2,3,4,5,6].findIndex(function(item) {
    return item > 3;
  }));
}

{
  console.info('number', [1,2,NaN].includes(1));
  console.info('number', [1,2,NaN].includes(NaN));
}
