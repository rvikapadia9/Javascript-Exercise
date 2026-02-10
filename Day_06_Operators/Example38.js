// Not Equal with NOT (!)
// let isBlocked = false;


// Exercise:
// Allow login only if the user is NOT blocked.

let isBlocked = true;

if (!isBlocked) {
    console.log("Login successful.");
}
else {
    console.log("Login failed. User is blocked.");
}   

// Explanation: This code checks if a user is allowed to log in based on their blocked status. It uses the NOT operator (!) to invert the boolean value of isBlocked. If isBlocked is false (meaning the user is not blocked), the login is successful; otherwise, the login fails. The result is printed to the console.
