// Freeze with Nested Object (Tricky)
// let user = {
//   name: "Amit",
//   address: {
//     city: "Delhi"
//   }
// };
// Object.freeze(user);


// Exercise:

// Try changing name

// Try changing address.city

// Observe what changes work and what don’t.
let user = {
    name: "Amit",
    address: {
        city: "Delhi"
    }
};
Object.freeze(user);
user.name = "Vijay";
user.address.city = "Mumbai";
console.log(user); // Output: { name: "Amit", address: { city: "Mumbai" } }
//why Object.freeze only freezes the top-level properties of the object. The nested objects (like address) are not frozen, so their properties can still be modified.


