// グローバルコンテキスト
let a = 0;
function b() {
  // 関数コンテキスト
  console.log(this, arguments, a);
}

console.log(a);
b();