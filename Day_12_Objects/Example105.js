// Given a sealed object:

// let settings = { sound: true };
// Object.seal(settings);


// Exercise:
// Predict results when:

// Updating sound

// Deleting sound

// Adding volume
let settings = { sound: true };
Object.seal(settings);
settings.sound = false;
delete settings.sound;
settings.volume = 10;
console.log(settings); // Output: { sound: false }

//why?
// When an object is sealed using Object.seal(), you can modify existing properties, but you cannot add new properties or delete existing ones. In this case, updating the sound property works, but deleting it or adding a new property like volume does not have any effect on the object.
