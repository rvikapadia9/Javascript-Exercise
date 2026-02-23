// Validation Scenario (QA)
// let statusCodes = [200, 404, 500, 200];

// Exercise:
// Log "PASS" for 200 and "FAIL" for others.

let statusCodes = [200, 404, 500, 200];

statusCodes.forEach(function(statusCode) {
    if (statusCode === 200) {
        console.log("PASS");
    } else {
        console.log("FAIL");
    }
});

//Explanation:
// The forEach() method executes a provided function once for each array element.
// The forEach() method does not return any value.
// The forEach() method does not modify the original array.