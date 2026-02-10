// Real-World Nested Object

// Create an object order with:

// orderId

// product (object with name & price)

// customer (object with name & phone)

// Exercise:
// Print product price and customer name.

let order = {
    orderId: 12345,
    product: {
        name: "Smartphone",
        price: 29999
    },  
    customer: {
        name: "Ravi",
        phone: "1234567890"
    }
};
console.log(order.product.price);
console.log(order.customer.name);
