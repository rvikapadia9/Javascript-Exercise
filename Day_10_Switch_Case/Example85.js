// Payment Method
// let payment = "upi";


// Exercise:

// "card" → Paid via Card

// "upi" → Paid via UPI

// "cash" → Cash Payment

// Default → Payment Failed
let payment = "upi";
let paymentStatus;
switch (payment) {
    case "card":
        paymentStatus = "Paid via Card";
        break;
    case "upi":
        paymentStatus = "Paid via UPI";
        break;  
    case "cash":
        paymentStatus = "Cash Payment";
        break;
    default:
        paymentStatus = "Payment Failed";
}
console.log(paymentStatus);