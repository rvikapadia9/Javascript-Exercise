// Automation-Style Scenario (Interview Gold)

// Create a function that:

// Takes an API statusCode

// Returns:

// "SUCCESS" for 200

// "NOT FOUND" for 404

// "ERROR" for anything else

// Automation-Style Scenario (Interview Gold)
// Create a function that:
// Takes an API statusCode
// Returns: "SUCCESS" for 200, "NOT FOUND" for 404, "ERROR" for anything else

// Define a function named 'apiStatus' that takes a statusCode
function apiStatus(statusCode) {
    // Check if statusCode is 200
    if (statusCode === 200) {
        // If true, return "SUCCESS"
        return "SUCCESS";
    }
    // Check if statusCode is 404
    else if (statusCode === 404) {
        // If true, return "NOT FOUND"
        return "NOT FOUND";
    }
    // For any other statusCode
    else {
        // Return "ERROR"
        return "ERROR";
    }
}
// Call the 'apiStatus' function with 200 and log the result
console.log(apiStatus(200));

// Arrow Function Example
// Define 'apiStatus1' using nested ternary operators for the same logic
const apiStatus1 = (statusCode) => statusCode === 200 ? "SUCCESS" : statusCode === 404 ? "NOT FOUND" : "ERROR";
// Call the arrow function 'apiStatus1' and log the result
console.log(apiStatus1(200));