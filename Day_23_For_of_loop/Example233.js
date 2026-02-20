// Search Element
// let fruits = ["apple", "banana", "orange"];

// Exercise:
// Check if "banana" exists using for…of.

let fruits = ["apple", "banana", "orange"];
let found = false;
for(let fruit of fruits){
    if(fruit === "banana"){
        found = true;
        break;
    }
}
console.log(found);

//Explanation:
// The for...of loop is used to iterate over the elements of an array.
// The loop iterates over the elements of the array in order.
// The loop terminates when all elements of the array have been iterated over.
