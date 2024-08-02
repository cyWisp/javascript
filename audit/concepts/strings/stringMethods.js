"use strict";

let text = "This is a text variable"

// length - The length property returns the length of a string
console.log(text.length);   // -> 23

// charAt() - The charAt() method returns the character at a specified index (position) in a string
console.log(text.charAt(2));    // -> "i"

// chatCodeAt() - The charCodeAt() method returns the code of the character at a specified index in a string
console.log(text.charCodeAt(0));    // -> 84

// at() - ES2022 Introduced the string method at()
// The at() method returns the character at the specified index (position) in a string.
console.log(text.at(0));    // -> "T"

// Property access
console.log(text[0]);   // -> "T"

// Extracting sub strings with .slice()
console.log(text.slice(0, 4));  // -> "This"

