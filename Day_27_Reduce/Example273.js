// API Response Summary (QA Favorite)
// let responses = [
//   { status: 200 },
//   { status: 404 },
//   { status: 200 },
//   { status: 500 }
// ];

// Exercise:
// Use reduce() to return an object like:
// { success: 2, failure: 2 }

let responses = [
  { status: 200 },
  { status: 404 },
  { status: 200 },
  { status: 500 }
];

let responseSummary = responses.reduce(function(accumulator, currentValue) {
    if (currentValue.status === 200) {
        accumulator.success++;
    } else {
        accumulator.failure++;
    }
    return accumulator;
}, { success: 0, failure: 0 });

console.log(responseSummary);

//Explanation:
// The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
// The reduce() method does not modify the original array.
