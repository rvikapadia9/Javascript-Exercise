// User Role Access
// let role = "admin";


// Exercise:

// "admin" → "Full Access"

// "manager" → "Limited Access"

// Else → "No Access"
let role = "admin";
let access = (role === "admin") ? "Full Access" :
    (role === "manager") ? "Limited Access" : "No Access";
console.log(access);
