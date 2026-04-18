let nums = [2, 7, 11, 5];

var twoSumloop = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

var twoSumUsingSet = function (nums, target) {
  const obj = new Set();
  for (let i = 0; i < nums.length; i++) {
    const result = target - nums[i];
    if (obj.has(result)) {
      const idx = nums.indexOf(result); // run operations n times.
      return [idx, i];
    }
    obj.add(nums[i]);
  }
};

function twoSumHashmap(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const result = target - nums[i];

    if (map.has(result)) {
      return [map.get(result), i];
    }
    map.set(nums[i], i);
  }
  return null;
}

console.log(twoSumHashmap(nums, 9));

// 1. Run the function
const result = twoSumHashmap(nums, 9);

// 2. Find the HTML element
const display = document.getElementById("dsa");

// 3. Write the result to the screen
if (result) {
  display.textContent = `Numbers found: ${result[0]} and ${result[1]}`;
} else {
  display.textContent = "No match found.";
}

const animal = {
  eats: true,
};

const dog = {
  barks: true,
};

dog.prototype = animal;
console.log("DOGGGGG", dog);
