// Mixed seal + Nested Update (Tricky)
// let userProfile = {
//   id: 101,
//   name: "Ravi",
//   preferences: {
//     theme: "light",
//     notifications: true
//   }
// };

// Object.seal(userProfile);

// Tasks

// Try to update name

// Try to add a new property email

// Try to delete id

// Try to update preferences.theme

// Try to add preferences.language
let userProfile = {
    id: 101,
    name: "Ravi",
    preferences: {
        theme: "light",
        notifications: true
    }
};
Object.seal(userProfile);
userProfile.name = "Rahul";
userProfile.email = "rvi@yopmail.com"
delete userProfile.id;
userProfile.preferences.theme = "dark";
userProfile.preferences.language = "English";
console.log(userProfile);
// Output:
// {
//   id: 101,
//   name: "Rahul",
//   preferences: {
//     theme: "dark",
//     notifications: true,
//Which operations succeed and why?
// - Updating name works because Object.seal allows modification of existing properties.
// - Adding email fails because Object.seal prevents adding new properties.
// - Deleting id fails because Object.seal prevents deletion of properties.
// - Updating preferences.theme works because preferences is a nested object and Object.seal does not affect nested objects.
// - Adding preferences.language works for the same reason as above; Object.seal does not prevent modifications to nested objects.
