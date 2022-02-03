// What is the key difference between an array and an object?

// Creating objects:

// Empty object

// Object with many properties

// Define a character variable and assign it to an object containing name, img, and likes keys. The value of likes should be 0 while name and img can be whatever pokemon character data you like.

const character = {
  name: "Pikachu",
  img: "www.img.com",
  likes: 0,
};

// Retreiving property values from an object

// bracket notation

// dot notation

// Define a function increaseValue() that should take in 2 arguments: object and key. Increment the value by 1 so that every time the function is invoked, the number of likes will increment.

// Example: increaseValue(character, "likes") -> 1
// Example: increaseValue(character, "likes") -> 2
// Example: increaseValue(character, "likes") -> 3

// Manipulating an object

// Adding a new property and value to an existing object

// destructive

// non-destructive

// Create a function updateChar(): this function should take in three arguments: an character Object, a key and a value. This function should operate non-destructively so it should return a new Object that has the new property included.

// Example: updateChar(character, "abilities", []) -> {name: 'Pikachu', img: 'www.img.com', likes: 0, abilities: []}

// Removing a key/value pair from an existing object

// destructive

// non-destructive

// for...in loop

// Write a function charDetails() that takes a character object in as an argument and loops through the object using the for...in method to print out the values of each property

// Example: charDetails(character) -> name: Pikachu img: www.img.com likes: 0

// for...of loop

// Think about the necessary steps to return the same result as above, using a for...of loop.

// Write a function printAbilities that accepts a character object as an argument and returns a list of the characters abilities as a string.  Use the provided pikachu object to test.

// Example: printAbilities(pikachu) -> "static, lightning-rod"

const pikachu = {
  name: "Pikachu",
  img: "www.img.com",
  likes: 0,
  abilities: [
    {
      name: "static",
    },
    {
      name: "lightning-rod",
    },
  ],
};

// BONUS: Modify printAbilities so that it returns the string as: 'Abilities: static, lightning-rod'
