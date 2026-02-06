// Grade System
// let grade = "B";


// Exercise:

// "A" → Excellent

// "B" → Good

// "C" → Average

// "D" → Poor

// Default → Fail
let grade = "B";
let result; 
switch (grade) {
    case "A":
        result = "Excellent";   
        break;
    case "B":
        result = "Good";
        break;
    case "C":
        result = "Average";
        break;
    case "D":
        result = "Poor";    
        break;
    default:
        result = "Fail";
}
console.log(result);
    