// ------------ Debugging and Testing tools: ------------

// Using console.log()
// console.log(1+1)
// `node` in terminal to enter a repl
// Debugger

// ------------ 7 data types in JS: ------------

// Number

// integer
12;
// floats
3.14;
NaN;

// typeof

// console.log(typeof NaN)

// // String

// let cat = "timmy"

// "string"
// 'This is a stringy string'
// console.log('my cats name is ${cat}') // interpolation: embed a variable within a string

// Undefined: empty value, unassigned variable, when functions value is undefined(function has no return value)

// Null: absense of value

let song = "Wednesday song";

// console.log(song)

// Boolean

// true
// false

let favorite = false;

// console.log(typeof favorite)

// examples of falsey values
// 0
// null
// undefined
// ""
// false
// NaN

// everything else is truthy

// logical operators

let x = 1 != "1"; // comparing a string to number

// console.log(x)
// == vs ===

// !==

// BigInt: a numeric primitive in JavaScript that can represent integers with arbitrary precision

// let num = 9872381973289173198n

// // console.log(typeof num)

// // Symbol: unique identifier

// // Object

// let obj = {name: "molly"}

// What does it mean to be a primitive type?
// represents a single value

// let human = {
//     name: "molly",
//     age: 21,
// }

// let cat = "timmy isayo"

// let arr = cat.split(", ")

// console.log(cat)
// console.log(arr)

// console.log(cat === arr)

// What is the difference between null and undefined?

// What is a variable? a box that stores data

// What is the relationship between data types and variables

// How can a variable be declared

// const, let

// What is the difference between let and const

// const can not be redeclared or reassigned
// let can be reassigned but not redeclared
// let can be initialized without assignment i.e let song;

// let should be used for counters

// const someFunction = () => {
//     //logic for our function
//     let cat = "timmy"

// }

// console.log(cat)

// scope: accessibility of the variable and its value

// global: work for the whole file, access it anywhere within that file, program
// local: within a function, can not be referenced outside of the function
// block scope:

// if (true){
//     let phase = "javascript"
// }

// console.log(phase)

// const should be a go to

// ------------ Conditional statements ------------

// control flow: control the behavior of our program based on a condtion met

// if...else

// let pokemon = "Voltorb";
// let likes = 0;

// if (likes === 1) {
//   console.log(`${pokemon} has 1 like`);
// } else {
//   console.log(`${pokemon} has ${likes} likes`);
// }

// if...else if...else

let pokemon = "Voltorb";
let likes = 3;

// if (likes === 0) {
//   console.log("render: 0 likes");
// } else if (likes === 1) {
//   console.log('render: 1 like');
// } else {
//   console.log(`render: ${likes} likes`)
// }

// ternary operators

// condition ? truthy response : falsey response

// let fave = false

// let response = fave ? "❤️" : "♡"

// console.log(response)

// hoisted => var

function someFunction() {
  let localVar = "local variable";
  console.log("hoisted:", blockVar);

  if (true) {
    // var blockVar;
    console.log(blockVar);
    var blockVar = "block variable";
    console.log("inside block:", blockVar);
  }

  console.log("outside of block", blockVar);
}

someFunction();

// ------------------------------------------------ //
// console.log("------------------------");
// console.log("⬇️ Break Out Activites ⬇️");
// console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
// console.log("💡 Use console.log() To Check Answers 💡");
// console.log("------------------------");

// 🚧 Break Out Activity 1: Using let vs. const

// Uncomment the code below to properly declare and assign a value to "x" using "const"

// const x;

// const x = 5;

// const x;

// console.log(`Success! x = ${x}`);

// 🚨 Be sure to comment out any code above before proceeding to the next activity.

// Uncomment the code below to properly declare and assign a value to "y" using "let"

// let y;

// let y = 5;

// let y;

// console.log(`Success! y = ${y}`);

// 🚨 Be sure to comment out any code above before proceeding to the next activity.

// Uncomment the code below to get a successful response in console

// const a = 2;

// a = 2;

// let b;

// let b = 4

// console.log(`Success! ${a} + ${a} = ${b}`);

// 🚨 Be sure to comment out any code above before proceeding to the next activity.

// 🚧 Break Out Activity 2: Using if...else

// 🚧 Set a value for "time" between 0 and 24
// let time;

// If "time" is less than or equal to 12...
// if (❓) {

// console.log(`${time} is in the AM.`)

// In all other cases...
// } else {

// console.log(`${time} is in the PM.`)

// }

// ✨ BONUS: Try refactoring the above expression using a ternary operator.

// 🚨 Be sure to comment out any code above before proceeding to the next activity.

// 🚧 Break Out Activity 3: Using if...else...if

// We are given a variable "marks." Our task is to print:

// - "AA" if marks is greater than 90.
// - "AB" if marks is greater than 80 and less than or equal to 90.
// - "BB" if marks is greater than 70 and less than or equal to 80.
// - "BC" if marks is greater than 60 and less than or equal to 70.
// - "CC" if marks is greater than 50 and less than or equal to 60.
// - "CD" if marks is greater than 40 and less than or equal to 50.
// - "DD" if marks is greater than 30 and less than or equal to 40.
// - "FF" if marks is less than or equal to 30.

// 🚨 Assign a value to "marks" between 0 and 100

// let marks;

// 🚨 Format your if...else if...else conditional below

// if (❓) {
// ...
// } else if (❓) {
// ...
// ...
// } else {
// ...
// }
