// 8️⃣ Join Strings

// Create:

// let firstName = "Ravi";
// let lastName = "Patel";


// Join them using concat()

// Join them using template literals

// Concepts:
// concat()
// `${}`
"use strict";
let firstName = "Ravi";
let lastName = "Kapadia";
// Join using concat()
let fullNameConcat = firstName.concat(" ", lastName);
console.log("Full Name using concat():", fullNameConcat);
// Join using template literals
let fullNameTemplate = `${firstName} ${lastName}`;
console.log("Full Name using template literals:", fullNameTemplate);
// Expected Output:
// Full Name using concat(): Ravi Kapadia
// Full Name using template literals: Ravi Kapadia
// Explanation:
// The concat() method joins two or more strings and returns a new string.
// Template literals allow embedding expressions inside string literals using `${}` syntax for easier string construction.
