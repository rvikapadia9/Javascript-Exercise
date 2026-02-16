//write program to replace every character of a string with the character following it in the alphabet

function replaceCharacter(str) {
    return str.replace(/[a-zA-Z]/g, function (char) {
        if (char === 'z') return 'a';
        if (char === 'Z') return 'A';
        return String.fromCharCode(char.charCodeAt(0) + 1);
    });
}
console.log(replaceCharacter("hello"));