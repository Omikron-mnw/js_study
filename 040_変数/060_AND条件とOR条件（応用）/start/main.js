function hello(name) {
  name = name || 'Tom';
  console.log('hello ' + name);
}

// hello(0);
// hello();

let name = 'Bob';
// if (name) {
//   hello(name);
// }
name && hello(name);