//Check if a Value is an Array
const items = [1, 2, 3];

if (Array.isArray(items)) {
  console.log("items is an array");
} else {
  console.log("items is NOT an array");
}

console.log(typeof items);   // object (arrays are objects)