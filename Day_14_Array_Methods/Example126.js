// includes() – Check Existence
// let roles = ["admin", "user", "qa"];


// Exercise:

// Check if "qa" exists

// Check if "manager" exists

let roles = ["admin", "user", "qa"];

const isInclude = roles.includes("qa");
console.log(isInclude);   // true

const isInclude2 = roles.includes("manager");
console.log(isInclude2);  // false
