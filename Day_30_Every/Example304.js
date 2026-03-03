// Automation Scenario (Form Validation)
// let fields = [
//   { valid: true },
//   { valid: true }
// ];

// Exercise:
// Check if form is completely valid.

let fields = [{ valid: true }, { valid: true }];
let allValid = fields.every(field => field.valid === true);
console.log(allValid);

//Explanation:
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// The every() method returns true if it finds an element for which the callback function returns false; otherwise, it returns false.
// The every() method does not modify the original array.
