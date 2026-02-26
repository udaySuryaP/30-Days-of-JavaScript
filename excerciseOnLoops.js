/* 
Task 1: Sum of First N Natural Numbers
Write a function `sumOfN(n)` that returns the sum of the first n natural numbers
*/
function sumOfN(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// console.log(sumOfN(5));  // 15
// console.log(sumOfN(10)); // 55

/* 
Task 2: Multiplication Table
Write a function `printMultiplicationTable(n)` that returns the multiplication table for n.
Values return in the array must be of the format 2 * 2 = 4
*/
function printMultiplicationTable(n) {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
        arr.push(`${n} * ${i} = ${n * i}`);
    }
    return arr;
}
// console.log(printMultiplicationTable(2));
// ["2 * 1 = 2", "2 * 2 = 4", ..., "2 * 10 = 20"]

/* 
Task 3: Count Vowels in a String
Write a function `countVowels(str)` that returns the number of vowels 
(in both lower & uppercase) in the given string str.
*/
function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    str.split("").forEach((element) => {
        if (vowels.includes(element.toLowerCase())) {
            count++;
        }
    });
    return count;
}
// console.log(countVowels("Hello World")); // 3
// console.log(countVowels("AEIOU"));       // 5