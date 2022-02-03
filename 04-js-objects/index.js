// What is the key difference between an array and an object?

// Creating objects:

// Empty object

// let pokemon = {}

// Object with many properties

// Define a character variable and assign it to an object containing name, img, and likes keys. The value of likes should be 0 while name and img can be whatever pokemon character data you like.

const character = {
  name: "Pikachu",
  img: "www.img.com",
  likes: 0,
};

// Retreiving property values from an object

// bracket notation
// let name = 'name'
// console.log(character['name'])
// console.log(character[name])

// dot notation
// limitations: cant use multi worded keys, need to know the literal name of the key, cant be used for variables

// let key = prompt("what do you want to know about the character")

// console.log(character[key])

// console.log(character.name)

// Define a function increaseValue() that should take in 2 arguments: object and key. Increment the value by 1 so that every time the function is invoked, the number of likes will increment.

// function increaseValue(obj, key) {
  
//   return ++obj[key]
//  }


// const increaseValue = (obj, key) => obj[key] += 1


// console.log(increaseValue(character, "likes"))
// console.log(increaseValue(character, "likes"))


// Example: increaseValue(character, "likes") -> 1
// Example: increaseValue(character, "likes") -> 2
// Example: increaseValue(character, "likes") -> 3

// Manipulating an object

// Adding a new property and value to an existing object

// destructive

// character.abilities = "thunderbolt"
// character["abilities"] = "thunderbolt"

// console.log(character)

// non-destructive

// spread operator 

// let updatedChar = {...character, abilities: "testing"}

// Object.assign()

// let updatedChar = Object.assign({}, character, {abilites: "thunderbolt"})

// console.log(updatedChar)
// console.log(character)

// Create a function updateChar(): this function should take in three arguments: an object, a key and a value. This function should operate non-destructively so it should return a new Object that has the new property included.

// Example: updateChar(character, "abilities", []) -> {name: 'Pikachu', img: 'www.img.com', likes: 0, abilities: []}

// function updateChar(obj,key,value){
//   return {...obj, [key]:value}
// }

// const updateChar = (obj, key, value) => Object.assign({}, obj, {[key]: value})


// console.log(updateChar(character, "abilities", []))
// console.log(character)



// Removing a key/value pair from an existing object

// destructive

// delete character.img

// console.log(character)

// non-destructive

// make a new obj using the spread operator 
// deleting the key/value pair from the new obj 

let newObj = {...character}
delete newObj.img

console.log(newObj)
console.log(character)

// for...in loop

// Write a function charDetails() that takes a character object in as an argument and loops through the object using the for...in method to print out the values of each property

// Example: charDetails(character) -> name: Pikachu img: www.img.com likes: 0

// for...in loop

// for (const key in character){
//   console.log(character[key])
// }

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

function printAbilities(obj){
  let abilitiesArr = obj.abilities
  abilitiesArr.forEach(aObj => {
    for (const k in aObj){
      console.log(aObj[k])
    }
  })
}

console.log(printAbilities(pikachu))

// BONUS: Modify printAbilities so that it returns the string as: 'Abilities: static, lightning-rod'


// let arr1 = ["cat", "dog"]

// let arr2 = ["fish", "hamster"]

// let combinedArr = arr1.concat(arr2)
// console.log([...arr1, ...arr2])