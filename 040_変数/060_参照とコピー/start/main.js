let a = 'hello';
let b = a;
b = 'bye';
console.log(a);
console.log(b);

let c = {
  prop: 'hello'
}
let d = c;
d = {};
console.log(c);
console.log(d);