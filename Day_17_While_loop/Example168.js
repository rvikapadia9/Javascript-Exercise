// User Validation Scenario
// Goal: Simulate a user validation process with a maximum of 3 attempts using a while loop.
// Stop loop when validation succeeds (isValid becomes true) or attempts reach 3.

// Initialize 'isValid' flag to false
// Logic: Initially, the user is not validated.
let isValid = false;

// Initialize 'attempts' counter to 0
// Logic: Keeps track of how many attempts have been made.
let attempts = 0;

// Start while loop with complex condition
// Logic: The loop runs ONLY if BOTH conditions are true:
// 1. !isValid (isValid is false) - means user is not yet validated.
// 2. attempts < 3 - means we haven't used up all 3 allowed attempts.
while (!isValid && attempts < 3) {
    // Increment attempts counter
    attempts++;

    // Print the current attempt number
    console.log("Attempt number:", attempts);

    // Simulate validation success specifically on the 3rd attempt
    // Logic: This is just for demonstration. In real code, you'd check a password or input here.
    if (attempts === 3) {
        // Set isValid to true
        // Logic: This will cause the condition (!isValid) to become false, stopping the loop next time it checks.
        isValid = true;
        console.log("User validated successfully");
    } else {
        // Validation failed for this attempt
        console.log("Validation failed");
    }
}

// Check final status after the loop ends
// Logic: If the loop ended because of attempts limit and isValid is still false, deny access.
if (!isValid) {
    console.log("Maximum attempts reached. Access denied.");
}
