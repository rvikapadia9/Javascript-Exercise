// Print "Discount applicable" if user is a student OR a senior citizen.
let isStudent = false; // You can change this value to test different cases
let isSeniorCitizen = true; // You can change this value to test different cases
if (isStudent || isSeniorCitizen) {
    console.log("Discount applicable");
}

// If neither isStudent nor isSeniorCitizen is true, nothing will be printed.
// Example Outputs:
// For isStudent = true, isSeniorCitizen = false, Output: Discount applicable
// For isStudent = false, isSeniorCitizen = true, Output: Discount applicable
// For isStudent = false, isSeniorCitizen = false, Output: (no output)              