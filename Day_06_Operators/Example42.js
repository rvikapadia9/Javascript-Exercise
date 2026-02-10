// Inequality with AND
// let country = "India";
// let age = 20;


// Exercise:
// Allow registration if:

// country is not "USA"

// AND age is greater than 18

// Operators: !==, >, &&
let country = "India";
let age = 20;
if (country !== "USA" && age > 18) {
    console.log("Registration allowed.");
}
else {
    console.log("Registration denied.");
}
// Explanation: This code checks if a user is allowed to register based on their country and age. It uses the inequality operator (!==) to check if the country is not "USA" and the greater than operator (>) to check if the age is greater than 18. The logical AND operator (&&) ensures that both conditions must be true for the registration to be allowed. The result is printed to the console.