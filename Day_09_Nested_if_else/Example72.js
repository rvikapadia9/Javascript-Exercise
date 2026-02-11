// API Response Validation
// let statusCode = 200;
// let responseTime = 2500;


// Exercise:

// If status is 200

// If responseTime ≤ 2000 → "Test Pass"

// Else → "Performance Issue"

// Else → "API Failed"
let statusCode = 200;
let responseTime = 2500;
if (statusCode === 200) {
    if (responseTime <= 2000) {
        console.log("Test Pass");
    } else {
        console.log("Performance Issue");
    }
} else {
    console.log("API Failed");
}
