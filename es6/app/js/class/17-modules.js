// export let A = 123;

// export function test() {
//   console.info('test');
// }

// export class Hello {
//   test() {
//     console.log('class');
//   }
// }

let A = 123;

function test() {
  console.info('test');
}

class Hello {
  test() {
    console.log('class');
  }
}

export default {
  A,
  test,
  Hello
}
