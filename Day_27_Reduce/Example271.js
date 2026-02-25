// Group Values by Property
// let users = [
//   { role: "QA" },
//   { role: "Dev" },
//   { role: "QA" }
// ];

// Exercise:
// Use reduce() to group users by role.

let users = [
  { role: "QA" },
  { role: "Dev" },
  { role: "QA" }
];

let groupedUsers = users.reduce(function(accumulator, currentValue) {
    if (!accumulator[currentValue.role]) {
        accumulator[currentValue.role] = [];
    }
    accumulator[currentValue.role].push(currentValue);
    return accumulator;
}, {});

console.log(groupedUsers);

//Explanation:
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The reduce() method does not modify the original array.