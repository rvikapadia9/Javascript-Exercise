let nums = [5, 10, 15];

let allPositive = nums.every(num => num > 0);

console.log(allPositive);

//Explanation:
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// The every() method returns true if it finds an element for which the callback function returns false; otherwise, it returns false.
// The every() method does not modify the original array.