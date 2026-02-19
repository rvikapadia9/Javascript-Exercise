function a(b){
    console.log("Hi");
    return b();
   
}
function b(){
    console.log("Bye");
}

console.log(a(b));
//explanation
// 1. a function accepts a callback function.
// 2. It logs "a" to the console.
// 3. It calls the callback function.
// 4. It logs "b" to the console.


//explanation
// 1. a function accepts a callback function.
// 2. It logs "a" to the console.
// 3. It calls the callback function.
// 4. It logs "b" to the console.