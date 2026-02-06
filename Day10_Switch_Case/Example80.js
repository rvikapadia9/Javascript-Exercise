// User Role Access
// let role = "admin";


// Exercise:

// "admin" → Full Access

// "manager" → Limited Access

// "user" → Read Only

// Default → No Access

let role = "admin";
let access; 
switch (role) {
    case "admin":
        access = "Full Access";
        break;
    case "manager":
        access = "Limited Access";
        break;
    case "user":

        access = "Read Only";
        break;
    default:
        access = "No Access";
}
console.log(access);
