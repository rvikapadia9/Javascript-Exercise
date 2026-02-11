// Grade System
// let score = 82;


// Exercise:

// ≥ 90 → "A"

// ≥ 75 → "B"

// ≥ 60 → "C"

// Else → "Fail"
let score = 82;
let grade = (score >= 90) ? "A" :
    (score >= 80) ? "B" :
    (score >= 70) ? "C" : "Fail";
console.log(grade);
