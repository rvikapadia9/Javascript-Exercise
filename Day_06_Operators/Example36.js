// Equality with AND (&&)
// let age = 25;
// let hasId = true;

// Exercise:
// Check if the user is eligible to enter only when:

// age is greater than or equal to 18

// AND hasId is true

// Operators: >=, &&
let age = 25;
let hasId = true;

if (age >= 18 && hasId) {
    console.log("User is eligible to enter.");
}
else {
    console.log("User is not eligible to enter.");
}
// Explanation: This code  checks if a user is eligible to enter based on two conditions: the user's age must be 18 or older, and the user must have a valid ID. It uses the greater than or equal to operator (>=) to check the age condition and the logical AND operator (&&) to ensure both conditions are met. The result is printed to the console.
