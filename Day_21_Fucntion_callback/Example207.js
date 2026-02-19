//write a javascript program to find the maximum number in an array
function maxNumber(arr){
    let max = arr[0];
    console.log(max);
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
            console.log(max);
        }
     
    }

   return max;
}
console.log(maxNumber([1,6,2,3,6,4,5]));
