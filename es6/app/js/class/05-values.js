{
  console.info(0b11111);   // 2
  console.info(0B11111);
  console.info(0o123);     // 8
  console.info(0O123);
}

{
  console.info('15', Number.isFinite(15));
  console.info('NaN', Number.isFinite(NaN));
  console.info('1/0', Number.isFinite(1/0));
  console.info('Infinity', Number.isFinite(Infinity));

  console.info('NaN', Number.isNaN(NaN));
  console.info('0', Number.isNaN(0));
}

{
  console.info('25', Number.isInteger(25));
  console.info('25.0', Number.isInteger(25.0));
  console.info('25.1', Number.isInteger(25.1));
  console.info('25', Number.isInteger('25'));
}

{
  console.info(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
  console.info(10, Number.isSafeInteger(10));
  console.info('a', Number.isSafeInteger('a'));
}

{
  console.info(4.1, Math.trunc(4.1));  // 4
  console.info(4.9, Math.trunc(4.9));  // 4

  console.info(-5.5, Math.floor(-5.5));  // -6
  console.info(-5.5, Math.trunc(-5.5));  // -5
  console.info(5.5, Math.floor(5.5));    // 5
}

{
  console.info(-5, Math.sign(-5));   // -1
  console.info(0, Math.sign(0));     // 0
  console.info(5, Math.sign(5));     // 1

  console.info('50', Math.sign('50'));
  console.info('foo', Math.sign('foo')); // NaN
  console.info('-50', Math.sign('-50'));
}

{
  console.info(-1, Math.cbrt(-1));
  console.info(8, Math.cbrt(8));
}
