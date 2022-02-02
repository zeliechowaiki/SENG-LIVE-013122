// 1. 

// const add = (num1, num2) => {
//     return num1 + num2
// }

// const add = (num1, num2) => num1 + num2

// // console.log(add(1, 2))

// const multiply = (num1, num2) => num1 * num2
// console.log(multiply(1, 2))

// const sub = (num1, num2) => num1 - num2
// console.log(sub(1, 2))

// function compute(x, y, cb){
//     return cb(x, y)
// }

// const compute = (x, y, cb) => cb(x, y)

// console.log(compute(2, 3, add))
// console.log(compute(5, 9, multiply))
// console.log(compute(10, 9, sub))

// let likeBttn = document.querySelector("#likes-bttn")
// let likes = 0

// let increaseLikes = () => {
//     console.log(++likes)
// }

// likeBttn.addEventListener("click", function(){
//     console.log(++likes)
// })

// likeBttn.addEventListener("click", () => console.log(++likes))

// Understanding arrays

// What are arrays and how do they allow us to structure our data?

// index structured list
// a list of items separated by , 
// a list in a particular order
// collections
// can store different types of data
// non primitive

// Define a variable 'pokemons' set to an empty array.

// const pokemons = []

// Rewrite the 'pokemons' array with the following elements: 'pikachu', 'bulbasour', 'jigglypuff'

const pokemons = ['pikachu', 'bulbasour', 'jigglypuff']

// Elements:

//  Return 'bulbasour' from the pokemons array (challenge: there are 2 different ways to return this element)

// console.log(pokemons[1])
// console.log(pokemons.slice(1, 2)[0])
// console.log(pokemons[pokemons.length -2])

// Modifying arrays:

// Add a new element 'mew' to the end of pokemons using a non-destructive method.

// .push => destructive
// spread operator => makes a copy

// const newPoke = [...pokemons]
// console.log(newPoke)
// const newPoke2 = [...pokemons, "mew", "charmander"]
// const newPoke2 = ["mew", ...pokemons]
// []
// copy and pasting the contents of the pokemons array
// adding a new element, mew
// console.log(newPoke2)
// pokemons.push("mew")

// .splice is destructive

// Remove the first element of 'pokemons' in a non-destructive manner. Return a new array with the remaining elements

// console.log(pokemons.slice(1))

// const newPoke = [...pokemons]
// newPoke.shift()

// console.log(newPoke)
// console.log(pokemons)

// Create a new array, 'favorites', that includes the first 2 elements from pokemons only and the following 2 new elements: 'squirtle', 'turtwig' to the end. This should be non-destructive.
console.log(pokemons)
const favorites = [...pokemons]
const test = favorites.splice(0, 2, "squirtle")

console.log("pokemons:", pokemons)
console.log("favorites", favorites)
// console.log("favorites:", favorites)
// console.log("pokemons", pokemons)

// const newPoke = [...pokemons.slice(0, 2), "squirtle", "turtwig"] //**** */

// console.log(newPoke)

// const favorite2 = [...pokemons.slice(0,1), 'squirtle', 'turtwig']
// console.log(pokemons)
// console.log(favorite2)

// For the following exercises, comment in the following array:

// const pokemons = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine"]

// Iteration

// looping methods:

// for loop
// Define a for loop that will log each pokemon character to the console.

// for (let i = 0; i < pokemons.length; i++) {
//     console.log(pokemons[i])
// }

// for..of
// Rewrite the previous exercise using a for..of loop

// for (const eachElement of arr){
//     // do something with each element
//     // eachElement will represent each individual item inside of the array 
// }

// for (let character of pokemons){
//     console.log(`I am ${character}`)
// }

// Can also use 'do...while', and 'while' loops to cycle through array's elements.

// iteration methods:

// .forEach

// arr.forEach(function(el){
//     console.log(el)
// })

// receiving a cb function
// invoking the cb function for each element
// .forEach will return the element and that element can be passed to the callback function

// Arrow function syntax:

// when should we use a .forEach 
// some type of readability
let arr = [0, 1]
let newArr = []
arr.forEach(x => newArr.push(x * 2)) // return value will be the element

// console.log(newArr)

// pokemons.forEach(monster => console.log(`${monster} I choose you!`))

// Use forEach to iteratate through the pokemons array and return each character name in large caps

// Searching an array: .find() vs .filter()

// Create a method that will return all pokemon characters that start with the letter 's'. Which array method should be used for this task?

// Modifying an array

// .map()

// arr.map(function(el){
//     // change each element
// })

// arr.map(el => {
// change each element
// })

// Using map, return a new array with all pokemon character names lowercased.

// const months = ['Jan', 'March', 'April', 'June'];
// console.log(months)

// const newMonths = [...months]
// console.log(newMonths)

// newMonths.splice(0, 2, "July", "August")
// //returns "Jan" and "March"
// console.log(newMonths)
//adds the new ones at the beginning!