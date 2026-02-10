// let apiStatus = 200;
// let responseTime = 1200;
// Exercise:
// Test should pass only if:

// status is 200

// AND response time is less than 2000 ms

// Operators: ===, <, &&
let apiStatus = 200;
let responseTime = 1200;
if (apiStatus === 200 && responseTime < 2000) {
    console.log("Test passed. API is responsive and successful.");
}   
else {
    console.log("Test failed. API status or response time is not acceptable.");
}
// Explanation: This code checks if an API response meets certain criteria for a successful test. It verifies that the API status is exactly 200 (indicating success) and that the response time is less than 2000 milliseconds (indicating good performance). The logical AND operator (&&) ensures that both conditions must be true for the test to pass. The result of the test is printed to the console.
        