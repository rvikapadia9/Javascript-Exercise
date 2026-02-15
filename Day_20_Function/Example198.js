// Count Vowels

// Create a function that:

// Takes a string

// Returns the number of vowels

function countVowels(str){
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u'){
            count++;
        }
    }
    return count;
}
console.log(countVowels("javascript"));

//arrow function example
const countVowels1 = (str)=>{
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(str[i]==='a' || str[i]==='e' || str[i]==='i' || str[i]==='o' || str[i]==='u'){
            count++;
        }
    }
    return count;
};
console.log(countVowels1("hello"));
