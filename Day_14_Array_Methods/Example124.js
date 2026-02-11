// concat() – Merge Arrays
// let a = [1, 2];
// let b = [3, 4];


// Exercise:

// Merge both arrays

// Check whether the original arrays changed

// Check whether the original arrays changed
let a = [1, 2];
let b = [3, 4];

// concat is a METHOD on an array; call it like a.concat(b)
let c = a.concat(b);

console.log('a:', a); // [1, 2]     -> unchanged
console.log('b:', b); // [3, 4]     -> unchanged
console.log('c:', c); // [1, 2, 3, 4] (new array)
