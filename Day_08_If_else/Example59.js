// Temperature Status
// let temperature = 38;


// Exercise:

// Above 40 → "Very Hot"

// 30–40 → "Hot"

// 20–29 → "Warm"

// Else → "Cold"
let temperature = 38; // You can change this value to test different cases

if (temperature > 40) {
    console.log("Very Hot");
} else if (temperature >= 30 && temperature <= 40) {
    console.log("Hot");
}
else if (temperature >= 20 && temperature <= 29) {
    console.log("Warm");
}
else {
    console.log("Cold");
}
// Example Outputs:
// For temperature = 45, Output: Very Hot
// For temperature = 35, Output: Hot    
// For temperature = 25, Output: Warm
// For temperature = 15, Output: Cold
// Note: You can change the value of 'temperature' to test different cases.
// The conditions are checked in order, and the first true condition's block is executed.
