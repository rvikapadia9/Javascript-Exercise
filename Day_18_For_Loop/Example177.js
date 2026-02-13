// Find Maximum Number
// let numbers = [12, 45, 7, 89, 23];


// Find the largest number using a for loop.
let numbers = [12, 45, 7, 89, 23];
let max = numbers[0];
for(let i=1;i<numbers.length;i++){
    if(numbers[i]>max){
        max = numbers[i]
        console.log("max is ",max);
    }
}

