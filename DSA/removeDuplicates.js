// function removeDuplicates(arr) {
//   let set = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     if (set.has(arr[i])) {
//       return arr[i];
//     }

//     set.add(arr[i]);
//   }
//   return null;
// }

// // console.log(removeDuplicates([2, 5, 1, 2, 3, 5]));

// function removeDuplicatesHashMap(arr) {
//   let obj = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]] !== undefined) {
//       return arr[i];
//     }
//     obj[arr[i]] = true;
//   }
//   return null;
// }

// // console.log(removeDuplicatesHashMap([2, 5, 1, 2, 3, 5]));

// function maxDuplicatesCounts(arr) {
//   let obj = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//       obj[arr[i]] += 1;
//     } else {
//       obj[arr[i]] = 1;
//     }
//   }

//   let maxCount = 0;
//   let result = 0;

//   for (let key in obj) {
//     if (obj[key] > maxCount) {
//       maxCount = obj[key];
//       result = key;
//     }
//   }

//   return { element: Number(result), count: maxCount };
// }

// console.log(maxDuplicatesCounts([2, 5, 1, 2, 3, 5]));

function removeDuplicatesArray(nums) {
  //Hashmap method use to remove Duplicates from un-sort array
  const map = {};
  const newArr = [];
  for (let key of nums) {
    if (!map[key]) {
      map[key] = 1;
      newArr.push(Number(key));
    } else {
      map[key] = map[key] + 1;
    }
  }

  return newArr;
}

// const arr = [1, 2, 2, 3, 3, 3, 4];
const arr = [1, 1, 2];
console.log(removeDuplicatesArray(arr));

//when i have a sorted array so removed Duplicates using two pointers.
let nums = [1, 1, 2, 3, 3, 3, 4, 4, 4, 5, 6, 7];
let newArr = [nums[0]];
let i = 0;
let j = i + 1;

while (j < nums.length) {
  if (nums[i] !== nums[j]) {
    newArr.push(nums[j]);
    i = j;
  }
  j++;
}

console.log(newArr);
