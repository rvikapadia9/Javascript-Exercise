// Add at Beginning
// let colors = ["blue", "green"];


// Exercise:

// Add "red" and "yellow" at the beginning

// Print the returned value

// Print the updated array

let colors = ["Blue", "Green"];

// Add "Red" and "Yellow" at the beginning
const returned = colors.unshift("Red", "Yellow");

// Print the returned value (new length)
console.log(returned); // 4

// Print the updated array
console.log(colors); // ["Red", "Yellow", "Blue", "Green"]