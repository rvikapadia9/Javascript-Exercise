// All Users Active
// let users = [
//   { active: true },
//   { active: true }
// ];

// Exercise:
// Check if all users are active

let users =[{active : true},{active : false},{active : true},{active : true}];
let allActive = users.some(user => user.active === true);
console.log(allActive);

//Explanation:
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// The every() method returns true if it finds an element for which the callback function returns false; otherwise, it returns false.
// The every() method does not modify the original array.