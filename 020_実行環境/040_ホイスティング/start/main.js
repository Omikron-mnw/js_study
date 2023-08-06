a();

function a() {
  let c = 1;

  console.log('a is called');

  d();
  function d() {
    console.log('d is called');
  }
  console.log('a is called');
}

// var b;

// console.log(b);

// let b = 0;
const b = 0;

console.log(b);

