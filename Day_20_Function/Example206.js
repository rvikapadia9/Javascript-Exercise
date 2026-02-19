//write javascript program to capitalise only first letter of each word in a string

function capitaliseFirstLetter(str){
    let words = str.split(" ");
    let result = [];
    for(let i = 0; i < words.length; i++){
        result.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
    }
    return result.join(" ");
}

console.log(capitaliseFirstLetter("hello world"));

//Explanation:
// 1. Split the string into an array of words.
// 2. For each word, capitalize the first letter and append the rest of the word.
// 3. Join the words back into a string.

//with function

function capitaliseFirstLetter(str){
    let words = str.split(" ");
    let result = [];
    for(let i = 0; i < words.length; i++){
        result.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
    }
    return result.join(" ");
}

console.log(capitaliseFirstLetter("hello world"));



// without function 

let str = "hello world";
let words = str.split(" ");
let result = [];
for(let i = 0; i < words.length; i++){
    result.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
}
console.log(result.join(" "));