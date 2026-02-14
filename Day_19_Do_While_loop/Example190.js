// Compare while vs do…while (Output Prediction)
// let x = 5;

// do {
//   console.log(x);
//   x++;
// } while (x < 5);


// Exercise:
// Predict the output and explain why it prints.
let x = 5;

do {
  console.log(x);
  x++;
} while (x < 5);
console.log("do while loop ended");

// Output:
// 5

// Explanation:
// The do…while loop executes the code block at least once before checking the condition.
// So, it prints 5 first, then checks the condition (5 < 5), which is false, and stops.
let y = 5;

while (y < 5) {
  console.log(y);
  y++;
}
console.log("while loop ended");

// Output:
// (nothing prints)

// Explanation:
// The while loop checks the condition first. Since 5 < 5 is false,
// the loop body never executes.