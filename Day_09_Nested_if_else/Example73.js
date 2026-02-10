// Device & Browser Check
// let device = "desktop";
// let browser = "chrome";


// Exercise:

// If device is "desktop"

// If browser is "chrome" → "Run Tests"

// Else → "Browser Not Supported"

// Else → "Device Not Supported"
let device = "desktop";
let browser = "chrome"; 
if (device === "desktop") {
    if (browser === "chrome") {
        console.log("Run Tests");
    } else {
        console.log("Browser Not Supported");
    }
} else {
    console.log("Device Not Supported");
}
        