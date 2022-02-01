// What are functions and why do we use them?
// a block of code that performs a determined task
// Functions in JS are expressions that return values
// They allow you to perform actions as many times as you need without having to type out lines and lines of code
// javascript functions are objects that hold and manipulate code
// To make coding more compact and easier to debug / read by allowing certain blocks of code to execute a task and then be repeated when called
// Important: for efficiency of not having to repeat ourselves
// Allows you separate code, making it reusable.
// JavaScript functions are tools expressed in the form of a block of code; used to complete a task. They are important because they turn repetitive tasks with multiple blocks of code  into a single block of code
// An object that holds a sequence of JavaScript statements!

// function declaration

// function nameOfFunction(){
//     //...function body
// }

// Write a function 'loadPage()' using function declaration that will log: "page has loaded, run the program", to the console. Test the function in the console.

// declared this function

// console.log(loadPage) // first pass, compiles/hoisting, second pass: evaluation

// // only when we are using function declaration, does hoisting occur
// function loadPage(){
//    console.log("page has loaded, run the program")
//    return "this is a return value"

// }

// console.log(loadPage) // referencing the function**
// console.log(loadPage()) // invoking the function

// Reference vs Invocation

// Function return values

// Parameters vs Arguments

// let char = "Pikachu" // global scope

// function renderPokemon(){ // parameter: a placeholder/ some type of variable that represents a value that will be passed in upon invocation
//     // const char = "Charmander" // function scope

//     let char;
//     if (true){ // block scope
//         char = "Baltazar"
//         // console.log(char)
//     }
//     console.log(char)
//     // console.log(`rendering ${character}`)
// }
// let pikachu = "pikachu"

// renderPokemon() // argument: the actual value that will be used in the function
// renderPokemon("charmander")
// console.log(char) //

// Write a function 'renderPokemon' that will accept a 'character' as a parameter that will log 'Rendering <character>'

// Local vs global variables in relation to functions

// let globalVar = "global var"

// function test(){
//     console.log(globalVar)
// }

// vs

// console.log(localVar)

// function test(){
//     let localVar = "local var"
// }

// console.log(localVar)

// Default arguments

// function renderPokemon(character = "no character provided"){
//     console.log(`rendering ${character}`)
// }

// renderPokemon("pikachu")

// function expressions
// does not hoist

// first class citizen characteristics: assign a function as a variables value

// let x = function () {
//     console.log("wow this is a function expression");
// };

// console.log(x())

// function () {

// }

// first class functions
// a function is a value, and can be treated as such
// assigned a function to a variable
// return a function
// callbacks: pass a function to another function as an argument
// can be treated like any other objects: set a property on a function

// callback:
// high order function: the function accepting the cb vs callback function: the function thats being passed in as an argument
// asynchronous functions: doesn't move in sequential order, it doesn't stop the program from continuing without being completed

// callbacks should execute after the high order functions tasks are completed

// .map(() => {})
// .fetch .then(cb)

// arrow functions
// it does not bind 'this'

// declaring a variable cb, whos value is an anonymous function
// omitting the parenthesis bc we only have 1 argument
// implicitly returning a value
let cb = (name) => "still working";

console.log(cb("tyler"));

function sayName(name) {
  // callback function
  return `Hi, I'm ${name}`;
}

function greeting(cb, name) {
  // high order function
    console.log(name)
  console.log("inside of a high order function");
  return cb(name); // sayName("aysan")
}

function pokeChar(char) {
  return `the character is: ${char}`;
}

// references vs invocation
console.log(greeting(sayName, "tyler"))
// console.log(greeting("molly", sayName))
// console.log(greeting("axel", sayName))
// console.log(greeting("rodney", sayName))
// console.log("names:", names)
// console.log(greeting("pikachu"))
// console.log(greeting("elizabeth", sayName))

// setInterval(cb, 3000)

// arrow functions

// let arrowFunction = () => {

// }

// Rewrite 'loadPage()' to accept a parameter of 'status'. If status is loading, change status to 'done' after 30 seconds. If status is 'done', log "page has loaded, run the program" to the console.

// -------------------------------------------

// console.log("------------------------");
// console.log("⬇️ Break Out Activities ⬇️");
// console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
// console.log("💡 Use console.log() To Check Answers 💡");
// console.log("------------------------");

// 🚧 Break Out Activity 1: Defining, Declaring, and Invoking Functions

// ❗ Define a function that takes two numbers as arguments and returns their sum.

// Example: addNumbers(5, 5) ➞ 10

// ✨ BONUS: Try providing a default value for one of your arguments.

// ❗ Define a function that takes an integer "minutes" and converts it to seconds.

// Example: convert(6) ➞ 360

// 🚧 Break Out Activity 2: Creating / Implementing Higher-Order Functions

// ❗ Define a function, compareFunctions(), that will be passed two parameterless functions,
// first and second. compareFunctions() should call each function and return a string indicating
// which function returned the larger number.

// If first() returns the larger number, return the string "First Function is Higher!".
// If second() returns the larger number, return the string "Second Function is Higher!".
// If the functions return the same number, return the string "Draw!".

// Example: compareFunctions(() => 1, () => 10) ➞ "Second Function is Higher!"
// Example: compareFunctions(() => 10, () => 1) ➞ "First Function is Higher!"
// Example: compareFunctions(() => 10, () => 10) ➞ "Draw!"

// 🚨 Be sure to comment out any code above before proceeding.

// 🚧 Break Out Activity 3: Advanced Functions (Stretch Challenge)

// ❗ Define a function that reverses all the words in a sentence beginning with a particular letter.

// 💡 Reverse the words themselves, not the entire sentence.

// 💡 All characters in any sentence should remain in lower case.

// Example: reverseWords("sally sells seashells by the sea shore", "s") ➞ "yllas slles sllehsaes by the aes erohs"
