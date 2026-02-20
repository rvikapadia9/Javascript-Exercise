// Count Vowels
// let text = "automation";

// Exercise:
// Count vowels using for…of.

let text = "automation";
let vowels = 0;
for(let char of text){
    if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        vowels++;
    }
}
console.log(vowels);

//Explanation:
// The for...of loop is used to iterate over the elements of an array.
// The loop iterates over the elements of the array in order.
// The loop terminates when all elements of the array have been iterated over.