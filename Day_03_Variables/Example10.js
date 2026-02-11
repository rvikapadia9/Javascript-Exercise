// Swap Two Variables
let a = 5;
let b = 10;
console.log("Before Swap: a =", a, ", b =", b);

// Swap using a temporary variable
let temp = a;
a = b;
b = temp;    
console.log("After Swap: a =", a, ", b =", b);
// Swap back using destructuring assignment
[a, b] = [b, a];
console.log("After Swap Back: a =", a, ", b =", b); 
