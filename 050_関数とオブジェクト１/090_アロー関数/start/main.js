function a(name) {
  return 'hello ' + name;
}

const b = function(name) {
  return 'hello ' + name;
}
// アロー関数
const b1 = name => 'hello ' + name;

console.log(b1('Tom'));