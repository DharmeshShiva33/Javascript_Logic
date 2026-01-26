// Reverse a sttring
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Hello")); //olleH

// Find the largest number in Array
function findMax(...arr) {
  console.log(...arr);
  return Math.max(...arr);
}
console.log(findMax(3, 2, 5, 4, 6, 9, 8, 89)); //89

// Check if string is a palindrome
const isPalindrome = (str) => {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
};
console.log(isPalindrome("madam")); //true
console.log(isPalindrome("Hello")); //false

//Count Vowels in string
const countVowels = (str) => {
  return str.match(/[aeiou]/gi)?.length || 0;
};

console.log(countVowels("HELLO WORLD")); //3

// Remove duplicate from an array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([2, 1, 4, 5, 5, 6, 6, 7, 8, 8, 8]));

// Find the facctorial of a number

// The factorial of a number is the product of all positive integers less than or equal to
// that number, denoted by the exclamation mark (!). For example,
// the factorial of 5 (written as 5!) is 5 * 4 * 3 * 2 * 1 = 120.

function facctorial(n) {
  return n === 0 ? 1 : n * facctorial(n - 1);
}

console.log(facctorial(5)); //120
console.log(facctorial(8)); //40320

// Check if a number is prime
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7)); //true
console.log(isPrime(10)); //false

// Merge two sorted Arrays
function mergeSortedArray(arr1, arr2) {
  const mergeSortArray = [...arr1, ...arr2].sort((a, b) => a - b); //Sorting array
  return [...new Set(mergeSortArray)]; //Here i'm revome duplicate array
}
console.log(mergeSortedArray([1, 4, 3, 2], [8, 5, 3, 4]));

// Find the missing number in an array
function findMissingNumber(arr, n) {
  let sum = (n * (n + 1)) / 2;
  let arrSum = arr.reduce((a, b) => a + b, 0);
  return sum - arrSum;
}

console.log(findMissingNumber([1, 2, 4, 5, 6], 6)); //3

// FizzBuzz Problem
// The FizzBuzz problem is a common interview question where:

// Print "Fizz" for numbers divisible by 3.

// Print "Buzz" for numbers divisible by 5.

// Print "FizzBuzz" for numbers divisible by both 3 and 5.

// Otherwise, print the number itself.
function fizzBuzz(n) {
  for (i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0)
      console.log("FizzBuzz"); // Divisible by both 3 & 5
    else if (i % 3 === 0) console.log("Fizz"); // Only divisible by 3
    else if (i % 5 === 0) console.log("Buzz"); // Only divisible by 5
    else console.log(i); // Print the number itself
  }
}

fizzBuzz(15);

// Filter Method from array

const totalData = [
  { name: "john", age: 11 },
  { name: "johnn", age: 12 },
  { name: "johnnn", age: 13 },
  { name: "johnnnn", age: 14 },
  { name: "johnnnn", age: 10 },
];
function filterDataMethod() {
  const filterItem = totalData.filter((item) => {
    const filterItem = item.name === "john" && item.age === 11;
    console.log("FilterData", filterItem);
    return filterItem;
  });
}

filterDataMethod();

// All JavaScript Logic Question
// 1]
function fruit() {
  console.log(price); // undefined
  console.log(name); // Uncaught ReferenceError: Cannot access 'name' before initialization

  var price = 20;
  let name = "Banana";
}

// fruit();

// 2]
function setTimeoutFunction() {
  for (i = 0; i < 3; i++) {
    // setTimeout(() => console.log(i), 0); // 3 times- 3
  }
}

setTimeoutFunction();

// 3]
console.log(!"Hello"); // false
console.log(!!"Hello"); // true
console.log(typeof "Hello"); // String

// 4]
console.log(+true); // 1
console.log(typeof +true); // number

// 5]

let data = "Hello";
const dataName = {
  name: "Dharma",
  age: 26,
};
// console.log(dataName[Data]);//Uncaught ReferenceError: Data is not defined
console.log(dataName["name"]); //Dharma
console.log(dataName.name); //Dharma
console.log(dataName.data); //undefined

// 6]
let data1 = { name: "Dharma", age: 26 };
const data2 = data1;

data2.name = "D";
console.log(data1.name); //D

// 7]
var x;
x = 10;
console.log(x); // 10;

// 8]

y = 10;
// let y;
// console.log(y); // Uncaught ReferenceError: Cannot access 'y' before initialization

// 9]
let z;
z = 10;
console.log("z", z); // 10

// 10]
let a = 3;
let b = new Number(3);

console.log(typeof a); // number;
console.log(typeof b); // object;
console.log(a == b); // true;
console.log(a === b); // false;

// 11]
let name;
// console.log("11", typeof name); //undefined
name = {};
// console.log("11", typeof name); // object

// 12]
function test() {
  console.log("working1");
}

console.log(test()); //undefined
test(); // working1
// test().name = "Testong"; // we get two output :- first function run :- working1 ,,,, for this test().name --Uncaught TypeError: Cannot set properties of undefined (setting 'name')

//13]
let number = 0;
console.log(number++); //0
console.log(+number); //1
console.log(number++); //1
console.log(++number); //3
console.log(number); //3

// 14]

function getAge(...arg) {
  console.log(typeof arg); //object
  console.log(arg); // [21, 22]
}

getAge(21, 22);

// 15]
function getArgg() {
  "use strict";
  //   age = 21;
  var age1 = 22;
  //   console.log(age); //Uncaught ReferenceError: age is not defined
  console.log(age1); //22
}
getArgg();

// 16]
function getArgg() {
  console.log("working..."); //Working....
}
getArgg;
console.log(getArgg); // ƒ getArgg() {console.log("working..."); //Working....}
console.log(typeof getArgg); // function

// 17]
const maths = eval("10*10+2");
console.log(maths); //102

// 18]
const sum1 = "11" + 2;
console.log(sum1); //112

// 19]

// sessionStorage.setItem("key", "123456789"); //working
// sessionStorage.setItem(key, 123456789); //no working
// sessionStorage.setItem("key", 123456789); //working
// sessionStorage.setItem(key, "123456789"); //no working

// 20]
const obj = { a: "a", b: "b", c: "c" };

console.log(obj.hasOwnProperty("a")); //true
console.log(obj.hasOwnProperty(a)); //false

// 21]
const obj1 = { a: 1, b: 2, c: 3 };

console.log(obj.hasOwnProperty("a")); //true
console.log(obj.hasOwnProperty(obj.a)); //true
console.log(obj.hasOwnProperty(a)); //false

// 22]
const obj2 = { a: "one", b: "two", a: "repeat" };

console.log(obj2); //{a: 'repeat', b: 'two'}

// 23]
for (let i = 0; i < 5; i++) {
  if (i === 3) continue; // when i = 3 they exit loop & continue;
  console.log(i); // 0 1 2 4
}

// 24]
function first() {
  console.log("first");
}
function second() {
  // setTimeout(() => {
  //   console.log("second");
  // });
}
function third() {
  console.log("third");
}

first(); //first call
second(); //third call
third(); //second call

// 25]

const person = { name: "Dharma" };

function test(age) {
  return `${this.name} is ${age}`;
}
console.log(test.call(person, 21)); //Dharma is 21
console.log(test.bind(person, 21)); //ƒ test(age) {return `${this.name} is ${age}`;}
console.log(test.bind(person, 21)()); //Dharma is 21

// 26]
function test() {
  return (() => 0)();
}
console.log(test()); // 2 time print 0
console.log(typeof test()); // number

// 27]
function test() {
  return () => 0;
}

console.log(typeof test()); //function
console.log(typeof test()()); //number
console.log(test()()); //0

// 28]
console.log(typeof 1); //number
console.log(typeof typeof 1); //string

// 29]
const arr = [1, 2, 3];
arr[9] = 11;
console.log(arr); // [1, 2, 3, empty × 6, 11]

// 30]
const arr1 = [1, 2, 3, 4];
arr1[5] = arr1;
console.log(arr1);
// output:-
// (6) [1, 2, 3, 4, empty, Array(6)]

// 30]
// Everytime in javascript is either a ....
//1] Primitive or Object
//2] Function or Object
//3] Trick question only objects
//4] number or object

//31]
console.log(!!null); //false
console.log(!!""); //false
console.log(!!1); //true

// 32]
// console.log(setInterval(() => console.log("HI"), 1000));
// console.log(setInterval(() => console.log("HI"), 1000));
// console.log(setInterval(() => console.log("HI"), 1000));
// OUTPUT:-
// First Console out print setInterval Value:- 1, 2, 3
// Second Console out print setInterval Value:- HI, Hi, Hi

// 33]
console.log([..."string"]); // ['s', 't', 'r', 'i', 'n', 'g']
console.log([...[1, 2, 4, 6]]); // [1, 2, 4, 6]

// 34]
data = 2 + 4 + "6";
data1 = 3 + 5;
console.log(typeof data); //string
console.log(typeof data1); //number
console.log(data); //66

// 35]
(arrrrr = 1), 3, 4, 5, 6;
// console.log(...arrrrr); // Uncaught TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function

// 36]
data = 1 + 2 + "3";
console.log(typeof data); //string

// 37]
console.log(typeof 1 + 2 + "3"); // number23
console.log(typeof (1 + 2 + "3")); // string
console.log(typeof (1 + 2 + +"3")); // number

// 38]
console.log(typeof []); //object

// 39]
console.log(typeof [] == []); //object ---getting object because of memory location is different.

// 40]
let data3 = [1, 2, 3, 4].map((num) => {
  if (typeof num === "number") return;
  console.log("Hello");
  return num * 2;
});
console.log(data3); //  [undefined, undefined, undefined, undefined]

// 41]
function getInfo(number) {
  number.name = "Check";
}
const person2 = { name: "not checked" };
getInfo(person2);
console.log(person2);
