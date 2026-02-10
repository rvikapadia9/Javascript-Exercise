// Temperature Status
// let temp = 35;


// Exercise:

// 40 → "Very Hot"

// 30 → "Hot"

// 20 → "Warm"

// Else → "Cold"
let temp = 35;
let statuses = (temp >= 40) ? "Very Hot" :
    (temp >= 30) ? "Hot" :
    (temp >= 20) ? "Warm" : "Cold";
console.log(statuses);