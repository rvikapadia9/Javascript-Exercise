// Remove Inner Element
// let data = [
//   [1, 2, 3],
//   [4, 5, 6]
// ];


// Exercise:

// Remove 2

// Remove last element from second row

let data = [
  [1, 2, 3],
  [4, 5, 6]
];

// Remove 2
data[0].splice(1, 1);

// Remove last element from second row
data[1].pop();

console.log(data);
