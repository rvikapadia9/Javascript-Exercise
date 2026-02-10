// Nested Object Access
// let user = {
//   name: "Ravi",
//   address: {
//     city: "Ahmedabad",
//     state: "Gujarat"
//   }
// };


// Exercise:

// Access city

// Update state 
let user = {
    name: "Ravi",
    address: {
        city: "Ahmedabad",
        state: "Gujarat"
    }
};
console.log(user.address.city);
user.address.state = "Maharashtra";
console.log(user.address.state);



    