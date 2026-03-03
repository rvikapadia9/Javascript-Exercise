// Environment Safety Check
// let envChecks = [
//   { safe: true },
//   { safe: true }
// ];

// Exercise:

// Check if any environment is unsafe

// Check if deployment is allowed

let envChecks = [
  { safe: true },
  { safe: true }
];

// Check if any environment is unsafe
let anyUnsafe = envChecks.some(env => !env.safe);
console.log("Any environment is unsafe:", anyUnsafe);

// Check if deployment is allowed
let deploymentAllowed = envChecks.every(env => env.safe);
console.log("Deployment is allowed:", deploymentAllowed);

//Explanation:
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// The some() method returns true if it finds an element for which the callback function returns true; otherwise, it returns false.
// The every() method returns true if it finds an element for which the callback function returns false; otherwise, it returns false.
// The some() method does not modify the original array.
// The every() method does not modify the original array.
