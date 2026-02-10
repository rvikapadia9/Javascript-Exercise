// Login Security Check
// let userId = "101";
// let storedId = 101;
// let isActive = true;


// Exercise:
// Login is successful only if:

// IDs match strictly

// AND account is active

// Operators: ===, &&
let userId = "101";
let storedId = 101;
let isActive = true;    
if (userId === storedId && isActive) {
    console.log("Login successful.");
}
else {  
    console.log("Login failed. Please check your credentials and account status.");
}
// Explanation: This code checks if a user's login attempt is successful based on two conditions: the user ID must match the stored ID exactly (using the strict equality operator ===), and the account must be active (isActive must be true). If both conditions are met, the login is successful; otherwise, it fails. The result is printed to the console.
    