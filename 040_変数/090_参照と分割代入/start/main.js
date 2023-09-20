// const a = {
//   prop: 0
// }

// let { prop } = a;

// prop = 1;

// console.log(a, prop);

// function fn({ prop }) {
//   prop = 1;
//   console.log(a, prop);
// }

// fn(a);

// const c = {
//   prop1: {
//     prop2: 0
//   }
// }

// let { prop1 } = c;
// // console.log(prop1);

// prop1.prop2 = 1;

// console.log(c, prop1);

const c = {
  prop1: {
      prop2: 0
  }
}
const { prop1: { prop2 } } = c; // <- prop2の値を取得
const prop1 = { prop2: 1 }; // <- 新しくprop1というオブジェクトを定義※１
console.log(c, prop1);