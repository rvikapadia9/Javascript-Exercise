// let status = "shipped";
// Exercise:

// "placed" → "Order Placed"

// "shipped" → "On the Way"

// "delivered" → "Delivered"

// "cancelled" → "Cancelled"

// Else → "Invalid Status"
let Order_status = "shipped"; 
if (Order_status === "placed") {
    console.log("Order Placed");
}   
else if (Order_status === "shipped") {
    console.log("On the Way");
}
else if (Order_status === "delivered") {
    console.log("Delivered");
}
else if (Order_status === "cancelled") {
    console.log("Cancelled");
}
else {
    console.log("Invalid Status");
}



            