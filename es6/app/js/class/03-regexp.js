{
  // es5
  let regex = new RegExp('xyz', 'i');
  let regex2 = new RegExp(/xyz/i);

  console.info(regex.test('xyz123'), regex2.test('xyz123'));

  // es6, second flags overrides first ones
  let regex3 = new RegExp(/xyz/ig, 'i');
  console.info(regex3.flags); // 'i' here, not 'ig'
}

{
  // global match
  // g, next, ignore not matched
  // y, next character should macth
  let s = 'bbb_bb_b';
  let a1 = /b+/g;
  let a2 = /b+/y;

  console.info('one', a1.exec(s), a2.exec(s));
  console.info('one', a1.exec(s), a2.exec(s));

  console.info(a1.sticky, a2.sticky);
}

{
  // u, unicode
  console.info('u-1', /^\uD83D/.test('\uD83D\uDC2A')); // true, 2 characters
  console.info('u-1', /^\uD83D/u.test('\uD83D\uDC2A')); // false, 1 character

  console.info(/\u{61}/.test('a'));
  console.info(/\u{61}/u.test('a'));

  console.log(`\u{20BB7}`);

  let s = '𠮷';
  console.info('u', /^.$/.test(s));
  console.info('u', /^.$/u.test(s));

  console.info('test', /𠮷{2}/.test('𠮷𠮷'));
  console.info('test', /𠮷{2}/u.test('𠮷𠮷'));
}

{
  // s, not implemented in es6
}
