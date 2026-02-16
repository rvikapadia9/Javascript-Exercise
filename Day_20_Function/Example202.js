//write a javascript program to get the extension of a filename.
function getFileExtension(filename) {
    return filename.split(".").pop();
}

console.log(getFileExtension("index.json"));


//arrow function example
const getFileExtension1 = (filename) => filename.split(".").pop();
console.log(getFileExtension1("index.PDF"));

