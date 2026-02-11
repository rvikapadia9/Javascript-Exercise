// Extract Sub-array Using slice()
// let board = [
//   [10, 20],
//   [30, 40],
//   [50, 60]
// ];


// Exercise:

// Extract first two rows

// Extract only [30, 40]

let board = [
  [10, 20],
  [30, 40],
  [50, 60]
];


// Exercise:

// Extract first two rows
let board1 = board.slice(0,2);
console.log(board1);
// Extract only [30, 40]
let board2 = board[1];
console.log(board2); // [30, 40]
