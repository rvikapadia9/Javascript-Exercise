// API Status Validation (QA Scenario)
// let responses = [
//   { status: 200 },
//   { status: 404 },
//   { status: 200 },
//   { status: 500 }
// ];

// Exercise:

// Map status to "SUCCESS" or "FAIL"

// Keep only "SUCCESS"

// Count successes

let responses = [
  { status: 200 },
  { status: 404 },
  { status: 200 },
  { status: 500 }
];

const successCount = responses
  .map(response => response.status === 200 ? "SUCCESS" : "FAIL") // Map status to "SUCCESS" or "FAIL"
  .filter(status => status === "SUCCESS") // Keep only "SUCCESS"
  .reduce((count, status) => count + (status === "SUCCESS" ? 1 : 0), 0); // Count successes

console.log(successCount); // 2
console.log("**********************************");
console.log(responses.map(response => response.status === 200 ? "SUCCESS" : "FAIL"));
console.log("**********************************");
console.log(responses.map(response => response.status === 200 ? "SUCCESS" : "FAIL").filter(status => status === "SUCCESS"));

