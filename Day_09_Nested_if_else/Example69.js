// Age & ID Verification
// let age = 20;
// let hasId = true;


// Exercise:

// If age ≥ 18

// If hasId → "Entry Allowed"

// Else → "ID Required"

// Else → "Underage"
let age = 20;
let hasId = true;
if (age >= 18) {
    if (hasId) {
        console.log("Entry Allowed");
    } else {
        console.log("ID Required");
    }
} else {
    console.log("Underage");
}