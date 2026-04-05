const arr = [2, 5, 6, 7, 3, 4, 4, 9, 8, 1, 2, 2];
function findMax(val) {
  let max = val[0];

  for (let i = 0; i < val.length; i++) {
    if (val[i] > max) {
      max = val[i];
    }
  }
  return max;
}

console.log(findMax(arr));

function findMin(val) {
  let min = val[0];

  for (let i = 0; i < val.length; i++) {
    if (val[i] < min) {
      min = val[i];
    }
  }
  return min;
}

console.log(findMin(arr));

function sumOfArray(val) {
  let sum = null;
  for (let i = 0; i < val.length; i++) {
    sum += val[i];
  }
  return sum;
}

console.log("SUM", sumOfArray(arr));

function reverseArray(val) {
  let reverseArr = [];
  for (let i = val.length - 1; i >= 0; i--) {
    reverseArr.push(val[i]);
    // reverseArr = [...reverseArr, val[i]];
    // reverseArr = reverseArr.concat(val[i]);
  }
  return reverseArr;
}

console.log(reverseArray(arr));

function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log("TWO SUM", twoSum([2, 7, 11, 15], 9));
