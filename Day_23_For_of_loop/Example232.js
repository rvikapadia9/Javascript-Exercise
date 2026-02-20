// Find Largest Number
// let values = [12, 45, 7, 89, 23];

// Exercise:
// Find the largest number using for…of

let values = [12, 45, 7, 89, 23];
let largest = values[0];
for(let value of values){
    if(value > largest){
        largest = value;
    }
}
console.log(largest);

//Explanation:
// The for...of loop is used to iterate over the elements of an array.
// The loop iterates over the elements of the array in order.
// The loop terminates when all elements of the array have been iterated over.