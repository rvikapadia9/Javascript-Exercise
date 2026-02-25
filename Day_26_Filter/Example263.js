// API Validation Scenario (QA Favorite)
// let responses = [
//   { status: 200 },
//   { status: 404 },
//   { status: 200 },
//   { status: 500 }
// ];

// Exercise:
// Return only successful responses (status 200).
let responses = [
  { status: 200 },
  { status: 404 },
  { status: 200 },
  { status: 500 }
];

let successfulResponses = responses.filter(function(response) {
    return response.status === 200;
});

console.log(successfulResponses);

//Explanation:
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// The filter() method does not modify the original array.