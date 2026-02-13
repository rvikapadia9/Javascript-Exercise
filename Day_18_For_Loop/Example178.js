// Reverse a String
// let word = "hello";


// Reverse the string using a for loop.
let word = "hello";
let reversed = "";
for(let i=word.length-1;i>=0;i--){
    reversed = reversed + word[i];
}
console.log(reversed);