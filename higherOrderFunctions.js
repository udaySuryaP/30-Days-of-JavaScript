/* 
Task 1: Using Array Methods
Write a function `squareNumbers(arr)` using map() and arrow functions
*/
const squareNumbers = (arr) => {
    return arr.map(element => element * element);
};
// console.log(squareNumbers([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]

/* 
Task 2: Custom Filter Function
Create a function `filterEvenNumbers(arr)` using filter() and arrow functions
*/
const filterEvenNumbers = (arr) => {
    return arr.filter(element => element % 2 === 0);
};
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

/* 
Task 3: Sum of Positive Numbers
Write a function `sumPositiveNumbers(arr)` that takes an array of numbers and returns 
the sum of all positive numbers using filter() and reduce() with arrow functions
*/
const sumPositiveNumbers = (arr) => {
    return arr.filter(n => n > 0).reduce((sum, n) => sum + n, 0);
};
// console.log(sumPositiveNumbers([-1, 2, -3, 4, 5])); // 11

/* 
Task 4: Transform Array of Objects
Write a function `getNames(arr)` that takes an array of objects where each object has a 
name property, and returns an array of just the names using map() and arrow functions
*/
const getNames = (arr) => {
    return arr.map(obj => obj.name);
};
// console.log(getNames([{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }]));
// ["Alice", "Bob", "Charlie"]

/* 
Task 5: Find the Longest Word
Write a function `findLongestWord(arr)` that takes an array of strings and returns 
the longest word using reduce() and an arrow function
*/
const findLongestWord = (arr) => {
    return arr.reduce((longest, word) => {
        return word.length > longest.length ? word : longest;
    }, "");
};
// console.log(findLongestWord(["cat", "elephant", "dog", "rhinoceros"])); // "rhinoceros"