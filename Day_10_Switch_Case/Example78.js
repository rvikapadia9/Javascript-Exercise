// Traffic Light System
// let light = "red";


// Exercise:

// "red" → Stop

// "yellow" → Get Ready

// "green" → Go

// Default → Invalid Signal

let light = "red";
let action;
switch (light) {
    case "red":
        action = "Stop";
        break;
    case "yellow":
        action = "Get Ready";
        break;
    case "green":
        action = "Go";
        break;
    default:
        action = "Invalid Signal";
}
console.log(action);    
