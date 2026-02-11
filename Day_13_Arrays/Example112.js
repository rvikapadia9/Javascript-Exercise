// Data Types in Array
// let mixed = [10, "hello", true, null, { id: 1 }, [1, 2]];


// Exercises:

// Identify the data type of each element

// Check if the last element is an array

// Access the object’s id

// Concepts:
// Arrays can store multiple data types
let mixed = [10, "hello", true, null, { id: 1 }, [1, 2]];
console.log(typeof mixed[0]); // Output: "number"   
console.log(typeof mixed[1]); // Output: "string"
console.log(typeof mixed[2]);   // Output: "boolean"
console.log(typeof mixed[3]);   // Output: "object" (null is considered an object in JavaScript)
console.log(typeof mixed[4]);   // Output: "object"
console.log(typeof mixed[5]);   // Output: "object" (arrays are also considered objects in JavaScript)  
console.log(mixed.length); // Output: 6
console.log(mixed[5]); // Output: [1, 2]
console.log(Array.isArray(mixed[5])); // Output: true-expalanation: Array.isArray() is a method that checks if the provided value is an array. 
//  In this case, it confirms that the last element of the mixed array is indeed an array.
console.log(mixed[4].id); // Output: 1

console.log(Object.values(mixed[4])); // Output: 1
//why?
// The typeof operator returns the data type of each element in the array. The last element is checked using Array.isArray() to confirm that it is indeed an array. To access the id property of the object, we use mixed[4].id, which retrieves the value of the id property from the object at index 4.

