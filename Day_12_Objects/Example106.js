// Freeze an Object
// let account = {
//   balance: 10000
// };


// Exercise:

// Freeze the object

// Try to:

// Update balance

// Add new property

// Delete balance

// Observe what changes work and what don’t.
let account = {
    balance: 10000
};
Object.freeze(account);
account.balance = 12000;
account.type = "savings";
delete account.balance;
console.log(account); // Output: { balance: 10000 }
//why Object.freeze prevents any modifications to the object, including updating existing properties, adding new properties, or deleting properties. Therefore, the balance remains unchanged at 10000, the new property type is not added, and the balance property cannot be deleted.