//program to create new string adding 'New!' in front of a given string if the give string begin with 'New!' then return the original string
function addNew(str) {
    if (str.startsWith("New!")) {
        return str;
    } else {
        return "New! " + str;
    }
}
console.log(addNew("New! Hello"));
console.log(addNew("Hello"));
