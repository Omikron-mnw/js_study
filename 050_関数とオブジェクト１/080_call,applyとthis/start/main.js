function a(name) {
    console.log('hello ' + name);
}

const tim = {name: 'Tim'};

const b = a.bind(tim);

b();

a.apply(tim, ['Tim', 'Bob']);
a.call(tim, 'Tim', 'Bob');

const arry = [1, 2, 3, 4, 5];

// const result = Math.max.apply(null, Uint8ClampedArray);
const result = Math.max(...arry);
console.log(result);

