// Real Automation Scenario (Interview Gold)
// let testCases = ["login", "signup", "payment"];


// Exercise:

// Remove "signup"

// Check if "payment" exists

// Add "profile" at the beginning


let testCases = ["login", "signup", "payment"];

// Remove "signup"
const signupIndex = testCases.indexOf("signup");
if (signupIndex !== -1) {
  testCases.splice(signupIndex, 1);
}

// Check if "payment" exists
const hasPayment = testCases.includes("payment");
console.log(hasPayment); // true

// Add "profile" at the beginning
testCases.unshift("profile");

console.log(testCases);
// ["profile", "login", "payment"]
