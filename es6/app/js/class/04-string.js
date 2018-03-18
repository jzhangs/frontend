{
  console.info('a', '\u0061');
  console.info('𠮷', '\u20BB7');  // s ₻7 , error here as 0x20bb7 > 0xffff
  console.info('𠮷', '\u{20BB7}')
}

{
  let s = '𠮷';

  console.info('length', s.length);
  console.info('0', s.charAt(0));   // error here and below
  console.info('1', s.charAt(1));
  console.info('at0', s.codePointAt(0));
  console.info('at1', s.codePointAt(1));

  let s1 = '𠮷a';
  console.info('length', s1.length);
  console.info('code0', s1.codePointAt(0));
  console.info('code0', s1.codePointAt(0).toString(16));

  console.info('code1', s1.codePointAt(1));  // not a
  console.info('code2', s1.codePointAt(2));

}

{
  console.info(String.fromCharCode('0x20bb7'));
  console.info(String.fromCodePoint('0x20bb7'));
}

{
  let str = '\u{20bb7}abc';
  for (let i = 0; i < str.length; i++) {
    console.info('es5', str[i]); // not good
  }

  // !! important here
  for (let code of str) {
    console.info('es6', code);
  }
}

{
  let str = 'string';
  console.info('includes', str.includes('c'));
  console.info('includes', str.startsWith('ing'));
  console.info('includes', str.endsWith('ing'));
}

{
  let str = 'abc';
  console.info(str.repeat(2));
}

{
  let name = 'list';
  let info = 'hello world';

  let m = `i am ${name}, ${info}`;
  console.info(m);
}

{
  console.info('1'.padStart(2, '0'));
  console.info('1'.padEnd(2, '0'));
}

{
  let user = {
    name: 'list',
    info: 'hello world'
  };
  abc`i am ${user.name}, ${user.info}`;

  // tagged template
  // 1. to prevent xss attack
  // 2. localization, i18n
  function abc(s, v1, v2) {
    console.info(s, v1, v2);
    return s + v1 + v2;
  }
}

{
  console.info(String.raw `Hi\n${1+2}`);
  console.info(`Hi\n${1+2}`);
}
