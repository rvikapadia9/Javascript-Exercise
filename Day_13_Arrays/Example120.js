// Array examples with methods
let arr = [1, 2, 3, 4, 5];

// 1) Adding elements to the end of the array (mutates)
arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]

// 2) Removing the last element (mutates)
arr.pop();
console.log(arr); // [1, 2, 3, 4, 5]

// 3) Adding elements to the beginning (mutates)
arr.unshift(0);
console.log(arr); // [0, 1, 2, 3, 4, 5]

// 4) Removing the first element (mutates)
arr.shift();
console.log(arr); // [1, 2, 3, 4, 5]

// 5) Finding the index of an element (non-mutating)
console.log(arr.indexOf(3)); // 2

// 6) Checking if an element exists (non-mutating)
console.log(arr.includes(4)); // true

// 7) Reversing the array (mutates)
arr.reverse();
console.log(arr); // [5, 4, 3, 2, 1]

// 8) Sorting the array (mutates)
arr.sort((a, b) => a - b);
console.log(arr); // [1, 2, 3, 4, 5]

// 9) Slicing the array (non-mutating; returns new array)
let slicedArr = arr.slice(1, 4);
console.log(slicedArr); // [2, 3, 4]

// 10) Splicing the array (mutates; remove 1 at index 2 and insert 10)
arr.splice(2, 1, 10);
console.log(arr); // [1, 2, 10, 4, 5]

// 11) Joining into a string (non-mutating)
let joinedStr = arr.join(', ');
console.log(joinedStr); // "1, 2, 10, 4, 5"

// 12) Mapping (non-mutating; returns new array)
let mappedArr = arr.map(x => x * 2);
console.log(mappedArr); // [2, 4, 20, 8, 10]

// 13) Filtering (non-mutating; returns new array)
let filteredArr = arr.filter(x => x > 3);
console.log(filteredArr); // [10, 4, 5]

// 14) Reducing (non-mutating; returns value)
let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 22

console.log(arr); // Original array is still [1, 2, 10, 4, 5]

// 15) Freezing the array (prevents mutation of THIS array)
Object.freeze(arr);

// These will fail to change the array:
// - Direct index assignment
arr[0] = 100;
// - Or mutators like push/pop/splice/sort/reverse will also fail on frozen arrays

console.log(arr); // Still [1, 2, 10, 4, 5]