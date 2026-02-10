// Exam Result with AND Condition
// let theory = 45;
// let practical = 55;


// Exercise:

// If both ≥ 50 → "Pass"

// Else if any one ≥ 50 → "Reappear"

// Else → "Fail"
let theory = 45; // You can change this value to test different cases
let practical = 55; // You can change this value to test different cases
if (theory >= 50 && practical >= 50) {
    console.log("Pass");
}   
else if (theory >= 50 || practical >= 50) {
    console.log("Reappear");
}
else {
    console.log("Fail");
}

    