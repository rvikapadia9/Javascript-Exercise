// Real QA Scenario (API-like Data)
// let response = [
//   [{ status: 200 }],
//   [{ status: 404 }]
// ];


// Exercise:

// Access 404

// Change 404 to 500

// Check if first status equals 200
let response = [
  [{ status: 200 }],
  [{ status: 404 }]
];

// Access 404
console.log(response[1][0].status);

// Change 404 to 500
response[1][0].status = 500;

// Check if first status equals 200
let isSuccess = response[0][0].status === 200;
console.log(isSuccess);
