// Order Processing (QA Case)
// let isPaid = true;
// let isInStock = false;


// Exercise:

// If payment is done

// If product is in stock → "Order Confirmed"

// Else → "Out of Stock"

// Else → "Payment Pending"
let isPaid = true;
let isInStock = false;
if (isPaid) {
    if (isInStock) {
        console.log("Order Confirmed");
    } else {
        console.log("Out of Stock");
    }
} else {
    console.log("Payment Pending");
}
    