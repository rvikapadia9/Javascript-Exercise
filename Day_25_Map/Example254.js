// map() vs forEach() 
// let nums = [1, 2, 3];

// Exercise:
// Use map() to create a new array of tripled values and explain:

// Why original array remains unchanged

// Why map() is preferred here

let nums = [1, 2, 3];

let tripled = nums.map(function(num) {
    return num * 3;
});

console.log(tripled);
console.log(nums);

//Explanation:
// The map() method executes a provided function once for each array element.
// The map() method returns a new array.
// The map() method does not modify the original array.
// map() is preferred here because it returns a new array and does not modify the original array.
