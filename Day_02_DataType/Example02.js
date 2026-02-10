//Detect Multiple Data Types
const name = "Ravi";
const age = 30;
const isTester = true;
const user = { name: "Ravi", role: "QA" };
const skills = ["JS", "TS", "Playwright"];

console.log(typeof name);     // string
console.log(typeof age);      // number
console.log(typeof isTester); // boolean
console.log(typeof user);     // object
console.log(typeof skills);   // object (arrays are objects)