// Strict Equality with OR (||)
// let role = "admin";
// let role2 = "manager";


// Exercise:
// Allow access if role is admin OR manager.

// Operators: ===, ||
let role = "admin";
let role2 = "manager";  
if (role === "admin" && role2 === "manager") {
    console.log("Access granted.");
}
else {
    console.log("Access denied.");
}
// Explanation: This code checks if a user has access based on their role. It uses the strict equality operator (===) to compare the role variable with "admin" and role2 with "manager". The logical OR operator (||) is used to allow access if either condition is true. The result is printed to the console.
