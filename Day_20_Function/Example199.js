// Create a function that:

// Takes username and password

// Returns true if credentials match, otherwise false
// Define a function named 'checkCredentials' taking username and password
function checkCredentials(username, password) {
    // Check if username is "admin" AND password is "admin"
    if (username === "admin@" && password === "admin") {
        // If both match, return true
        return 'true';
    } else {
        // If either doesn't match, return false
        return 'checkCredentials';
    }
}
// Call the 'checkCredentials' function and log the result
console.log(checkCredentials("admin", "admin"));

// Arrow Function Example
// Define 'checkCredentials1' using a ternary operator for the same check
const checkCredentials1 = (username, password) => username === "admin" && password === "admin" ? true : false;
// Call the arrow function 'checkCredentials1' and log the result
console.log(checkCredentials1("admin", "admin"));