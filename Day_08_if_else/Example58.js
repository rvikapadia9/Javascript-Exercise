// // let age = 16;
// Age < 13 → "Child"

// Age 13–19 → "Teenager"

// Age 20–59 → "Adult"

// Else → "Senior Citizen"
let age = 45; // You can change this value to test different cases

if (age < 13) {
    console.log("Child");
} else if (age >= 13 && age <= 19) {
    console.log("Teenager");
} else if (age >= 20 && age <= 59) {
    console.log("Adult");
} else {
    console.log("Senior Citizen");
}   
// Example Outputs:
// For age = 10, Output: Child
// For age = 16, Output: Teenager
// For age = 45, Output: Adult
// For age = 70, Output: Senior Citizen
// Note: You can change the value of 'age' to test different cases.
// The conditions are checked in order, and the first true condition's block is executed.