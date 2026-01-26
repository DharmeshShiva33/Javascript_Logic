import { power, square } from "./mathLib.js";

console.log("Power Result:", power(2, 3));
console.log("Square Result:", square(5));

function counterRecursion(n) {
  if (n === 0) return 0;

  counterRecursion(n - 1);
  console.log(n);
}

counterRecursion(5);

// Store each value Recursion function
function counterRecursionStoreEachValue(n, result = []) {
  if (n < 0) return result;
  counterRecursionStoreEachValue(n - 1, result);
  result.push(n);
  return result;
}

const output = counterRecursionStoreEachValue(5);
console.log("sdad", output);
