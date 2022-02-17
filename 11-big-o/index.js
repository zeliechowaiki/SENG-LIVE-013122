// ✅ What is Asymptotic Notation?

// used to describe runtime of an algorithm
// "how much time will an algorithm take given an input N?"

// Goal = finding a balance between the efficiency and readability of our code
// depending on context.

// concerning ourselves with runtime isn't always necessary

// constant operation (simplest runtime)

// how many tasks are being achieved 
// how many times are those tasks being executed 

let myArray = [1, 2, 3, 4, 5];

const arrayLength = myArray.length; // 1 task 

// console.log(arrayLength);

// ✅ Big Θ (Theta) Notation

// number of iterations the algorithm always takes with an input of n

// Θ(N) - always iterates N times for a list size of N
let shorterArray = [1, 2, 3, 4, 5];
let longerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/// calculation on the number of inputs 
function iterateItems(arr) {
  arr.forEach((num) => {
    console.log(num);
  });
}

// O(n)

// iterateItems(shorterArray);
// iterateItems(longerArray);

// ✅ Big Ω (Omega) Notation

// best case running time

function findIndex(itemsArray, matchCase) {
  for (let i = 0, total = itemsArray.length; i < total; i++)
    if (itemsArray[i] == matchCase) {
      console.log(i);
    }
  console.log(-1);
}

const lettersArray = ["a", "b", "c", "d"];

findIndex(lettersArray, 'a');
// 0  (best case, one iteration)

// ✅ Big O Notation

// worst case running time

// knowing Big O helps us to be more aware of the efficiency of algorithms so
// that we can optimize the performance of our applications

// help us to select the most efficient solution

findIndex(lettersArray, 'd');

// 3  (worst case, 4 iterations)

// findIndex(lettersArray, 'e');

// -1 (worst case, 4 iterations)

// Constant Time Complexity: Big O(1)

function multipleByTwo(num) {
  return 2 * num; // 1 simple task 
}

// console.log(multipleByTwo(10)); // 20 iterations
// console.log(multipleByTwo(3000)); // 6000 iterations

// objects => o(1)

// Linear Time Complexity: Big O(N)

function reverseArr(originalArray) {
  let newArray = [];
  for (let i = originalArray.length - 1; i >= 0; i--) {
    newArray.push(originalArray[i]); // run this task based on how many inputs are in the array that is being over looped 
  }

  return newArray;
}

// console.log(reverseArr([4, 5, 6])); // [6, 5, 4]
// console.log(reverseArr([6, 5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5, 6]

// Quadratic Time Complexity: Big O(N^2)

function multAllElements(arr1, arr2) {
  if (arr1.length !== arr2.length) return undefined;

  let sumOfProducts = 0;

  for (let el of arr1) { // run a number of times depending on how many elements we have in array 
    for (let subEl of arr2) { 
      sumOfProducts += el * subEl;
    }
  }
  return sumOfProducts;
}

console.log(multAllElements([1, 2], [9, 10])); // yields 57
console.log(multAllElements([1, 2, 3, 4], [5, 6, 7, 8])); // yields 260


// Logarithmic time complexity: binary searches 
// one of the better time complexities 
// sorted input of data 
// O(log n)

let sortedNum = [0,1,2,3,4,5,6] // 7 iterations 
let newSortedNum = [3,4,5,6] //1 
let newNewSortedNum = [5,6] // 2 
let anotherSortedNum = [6] // our match // 3
// start at 3, compare to matchcase 


function findNum(arr, matchCase){ // O(n)
  for (let i = 0; i <= arr.length; i++){
    if (arr[i] === matchCase){
      console.log(arr[i])
    }
  }
}


// big O: run time complexity 
// determine the time complexity of an algorithm 
// 1. count the number of steps the computer will take to run the code 
// 2. Remove of any constants 
// -------------------------------------------

console.log("------------------------");
console.log("⬇️ Break Out Activities ⬇️");
console.log("🚨 Comment Out Lecture Code Above Before Starting 🚨");
console.log("💡 Use console.log() To Check Answers 💡");
console.log("------------------------");

// ❗ Use these constants / functions in your solutions

// 🚧 Break Out Activity 1: Calculating Big O Runtimes

// 🚨 Comment out any conflicting lecture code above before proceeding.

// 1️⃣ Determine the Big O runtime of findIndexOfFirstNumber() below.

function findIndexOfFirstNumber(num, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }

  return -1;
}

// ✅ O(n) => looping through array, dependent on the number of elements in the array. Will run the for loop for each element 

// 2️⃣ Determine the Big O runtime of findIndexOfEachNumber() below.

function findIndexOfEachNumber(num, arr) {
  let arrayOfIndices = []; // 1 
  arr.forEach((el, i) => {
    if (el === num) {
      arrayOfIndices.push(i);
    }
  });

  return arrayOfIndices;
}

// ✅ Linear time complexity: O(n)

// 🚧 Break Out Activity 2: Calculating Big O Runtimes

// 1️⃣ Determine the Big O runtime of findHigherOrLower() below.

const array = [36, 14, 1, 7, 21];

function findHigherOrLower(arr) {
  if (arr[arr.length - 1] > arr[0]) { // 1 task 
    return "Higher";
  } else if (arr[arr.length - 1] < arr[0]) { // 1 task 
    return "Lower";
  } else {
    return "Neither";
  }
}

// ✅ constant O(1)

// 2️⃣ Determine the Big O runtime of findSumOfSequentialArray() below.

const numsArray = [1, 2, 3, 4, 5, 6, 7, 8];

function findSumOfSequentialArray(arr) {
  let sumOfNums = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sumOfNums;
}

// ✅ O(n)

// 🚧 Break Out Activity 3: Calculating Big O Runtimes

// 🚨 Comment out any conflicting lecture code above before proceeding.

// 1️⃣ Determine the Big O runtime of sortArraysByValue() below.

function sortArraysByValue(arr) {
  function swap(arr, index1, index2) {
    let temporaryValue = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temporaryValue;
  }
  let count = 1;
  while (count < arr.length) {
    let swapCount = 0;
    for (let i = 0; i < arr.length - count; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapCount++;
      }
    }
    count++;
  }
  return arr;
}

// ✅ Write your answer / explanation here.

// 2️⃣ Determine the Big O runtime of findSumOfSequentialArray() below.

const sequentialArray = [1, 2, 3, 4, 5, 6, 7, 8];

function findSumOfSequentialArray(arr) {
  return (arr.length * (arr.length + 1)) / 2;
}

// ✅ O(1)
