// Callback Execution Order (Interview Favorite)
// function test(callback) {
//   console.log("Start");
//   callback();
//   console.log("End");
// }


// Exercise:
// Predict output when callback logs "Middle".

function test(callback) {
  console.log("Start");
  callback();
  console.log("End");
}

function middle() {
  console.log("Middle");
}

test(middle);

//explanation
// 1. test function accepts a callback function.
// 2. It logs "Start" to the console.
// 3. It calls the callback function.
// 4. It logs "End" to the console.