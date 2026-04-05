function removeDuplicates(arr) {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return arr[i];
    }

    set.add(arr[i]);
  }
  return null;
}

// console.log(removeDuplicates([2, 5, 1, 2, 3, 5]));

function removeDuplicatesHashMap(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] !== undefined) {
      return arr[i];
    }
    obj[arr[i]] = true;
  }
  return null;
}

// console.log(removeDuplicatesHashMap([2, 5, 1, 2, 3, 5]));

function maxDuplicatesCounts(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
  }

  let maxCount = 0;
  let result = 0;

  for (let key in obj) {
    if (obj[key] > maxCount) {
      maxCount = obj[key];
      result = key;
    }
  }

  return { element: Number(result), count: maxCount };
}

console.log(maxDuplicatesCounts([2, 5, 1, 2, 3, 5]));
