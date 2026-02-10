// Salary Tax Slab
// let salary = 650000;


// Exercise:

// ≤ 250000 → "No Tax"

// ≤ 500000 → "5% Tax"

// ≤ 1000000 → "20% Tax"

// Else → "30% Tax"
let salary = 650000; // You can change this value to test different cases
if (salary <= 250000) {
    console.log("No Tax");
} else if (salary <= 500000) {
    console.log("5% Tax");
}
else if (salary <= 1000000) {
    console.log("20% Tax");
}
else {
    console.log("30% Tax");
}