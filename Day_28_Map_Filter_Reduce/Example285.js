//write a javascript program to find the 2nd  maximum number in an array
let arr = [1,6,2,3,6,4,5];
function secondMaxNumber(arr) {
    if (arr.length < 2) {
        return "Second maximum not possible";
    }

    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i];
        }
    }

    return secondMax;
}

console.log(secondMaxNumber([1, 6, 2, 3, 6, 4, 5]));