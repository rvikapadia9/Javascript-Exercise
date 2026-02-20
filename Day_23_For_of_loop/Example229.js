// Sum of Array Elements
// let nums = [1, 2, 3, 4, 5];

// Exercise:
// Calculate the sum using for…of.

let nums = [1, 2, 3, 4, 5];
let sum = 0;
for(let num of nums){
    sum += num;
}
console.log(sum);

//Explanation:
// The for...of loop is used to iterate over the elements of an array.
// The loop iterates over the elements of the array in order.
// The loop terminates when all elements of the array have been iterated over.