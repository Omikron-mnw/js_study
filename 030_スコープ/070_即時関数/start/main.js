function a() {
  console.log('called');
}

a();

let c = (function(d) {
  console.log('called ' + d);
  return 0;
})(10);
console.log(c);

let b = function() {
  console.log('called');
}();

let e = (function() {
  console.log('called');

  let privateVal = 0;
  let publicVal = 10;

  function privateFn() {
    console.log('privateFn is called');
  }
  function publicFn() {
    console.log('publicFn is called' + privateVal++);
  }

  return {
    publicVal,
    publicFn
  };
})();

e.publicFn();

console.log(e.publicVal);