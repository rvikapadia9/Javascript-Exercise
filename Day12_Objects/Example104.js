// Seal an Object
// let config = {
//   theme: "dark",
//   version: "1.0"
// };


// Exercise:

// Seal the object

// Try to:

// Update theme

// Add new property mode

// Delete version

//  Observe what changes work and what don’t.

let config = {
    theme: "dark",
    version: "1.0"
};
Object.seal(config);
config.theme = "light";
config.mode = "auto";
delete config.version;
console.log(config); // Output: { theme: "light", version: "1.0" }
