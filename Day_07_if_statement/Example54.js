// Execute test only if browser is open AND user is logged in.
let isBrowserOpen = true; // You can change this value to test different cases
let isUserLoggedIn = true; // You can change this value to test different cases 
if (isBrowserOpen && isUserLoggedIn) {
    console.log("Test executed");
}   
// If either isBrowserOpen or isUserLoggedIn is false, nothing will be printed.
// Example Outputs: 
// For isBrowserOpen = true, isUserLoggedIn = true, Output: Test executed
// For isBrowserOpen = false, isUserLoggedIn = true, Output: (no output)
// For isBrowserOpen = true, isUserLoggedIn = false, Output: (no output)
// For isBrowserOpen = false, isUserLoggedIn = false, Output: (no output)
            