// Browser Selection (Automation)
// let browser = "chrome";


// Exercise:

// "chrome" → Launch Chrome

// "firefox" → Launch Firefox

// "edge" → Launch Edge

// Default → Browser Not Supported

let browser = "chrome";
let launchMessage;
switch (browser) {
    case "chrome":
        launchMessage = "Launch Chrome";
        break;
    case "firefox":
        launchMessage = "Launch Firefox";
        break;
    case "edge":
        launchMessage = "Launch Edge";
        break;
    default:
        launchMessage = "Browser Not Supported";
}
console.log(launchMessage);
