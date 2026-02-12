// User Validation Scenario
// let isValid = false;
// let attempts = 0;


// Exercise:
// Use a while loop to:

// Allow maximum 3 attempts

// Stop loop when isValid becomes true

// (No actual input needed—just logic)

// User Validation Scenario

// User Validation Scenario

let isValid = false;
let attempts = 0;

while (!isValid && attempts < 3) {
    attempts++;

    console.log("Attempt number:", attempts);

    // simulate validation success on 3rd attempt
    if (attempts === 3) {
        isValid = true;
        console.log("User validated successfully");
    } else {
        console.log("Validation failed");
    }
}

if (!isValid) {
    console.log("Maximum attempts reached. Access denied.");
}
