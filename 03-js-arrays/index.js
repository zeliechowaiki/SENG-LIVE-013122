// let likeBttn = document.querySelector("#likes-bttn")
// let likes = 0

// let increaseLikes = () => {
//     console.log(++likes)
// }
// likeBttn.addEventListener("click", increaseLikes)

// Understanding arrays

// What are arrays and how do they allow us to structure our data?

// Define a variable 'pokemons' set to an empty array.

// Rewrite the 'pokemons' array with the following elements: 'pikachu', 'bulbasour', 'jigglypuff'

// Elements:

//  Return 'bulbasour' from the pokemons array (challenge: there are 2 different ways to return this element)

// Modifying elements:

// Add a new element 'mew' to the end of pokemons using a non-destructive method.

// Remove the first element of 'pokemons' in a non-destructive manner

// Create a new array, 'favorites', that includes the first 2 elements from pokemons only and the following 2 new elements: 'squirtle', 'turtwig'. This should be non-destructive.

// For the following exercises, comment in the following array:

 let pokemons = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine"]

// Iteration

// looping methods:

// for loop
// Define a for loop that will log each pokemon character to the console.

// for..of
// Rewrite the previous exercise using a for..of loop

// Can also use 'do...while', and 'while' loops to cycle through array's elements.

// iteration methods:

// .forEach

// arr.forEach(function(el){
//     console.log(el)
// })
// let pokemons = ["pikachu", "bulbosaur", "charmander"]

// Arrow function syntax:
// arr.forEach(el => console.log(el))

let x = []
pokemons.forEach(el => {
    x.push(el.toUpperCase())
})

console.log(x)

// const total3 = books.forEach(logTitle)

// function logTitle(item){
//   let newItem1 = [];
//   newItem1.push(item.title.toUpperCase();
//   return newItem1
// }

// console.log(total3)

// Use forEach to iteratate through the pokemons array and return each character name in large caps

// Searching an array: .find() vs .filter()
arr = ["cat", "fish", "dog", "dinosaur"]
// console.log(arr.find((el) =>  el.startsWith('d')))

// let results = arr.filter((el) => el.startsWith('d'))

// console.log(results)

// Create a method that will return all pokemon characters that start with the letter 's'. Which array method should be used for this task?

// let results = pokemons.filter(char => char.startsWith('S'))
// console.log(results)

// Modifying an arrays elements

// .map()

// arr.map(function(el){
//     // change each element
// })

arr.map(el => {
// change each element
})

// Using map, return a new array with all pokemon character names lowercased.

// let newArr = pokemons.map(el => el.toLowerCase())

let newArr = pokemons.map(function(el){
    return el.toLowerCase() + " test"
})

console.log(newArr)