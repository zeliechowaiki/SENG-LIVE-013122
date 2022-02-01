// What are functions and why do we use them?

// function declaration

// function nameOfFunction(){
//     ...function body
// }

// Write a function 'loadPage()' using function declaration that will log: "page has loaded, run the program", to the console. Test the function in the console. 

// Reference vs Invocation

// Function return values

// Parameters vs Arguments

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

// function expressions

// let x = function () {
//   console.log("wow this is a function expression");
// };

// first class functions

// arrow functions

// let arrowFunction = () => {

// }

// Rewrite 'loadPage()' to accept a parameter of 'status'. If status is loading, change status to 'done' after 30 seconds. If status is 'done', log "page has loaded, run the program" to the console. 


// -------------------------------------------

console.log("------------------------");
console.log("⬇️ Break Out Activities ⬇️");
console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
console.log("💡 Use console.log() To Check Answers 💡");
console.log("------------------------");

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
