const interSectionOfTwoArrays = function (arr1, arr2) {
  const map = {};
  const result = [];

  for (let key of arr1) {
    map[key] = (map[key] || 0) + 1;
  }

  for (let key of arr2) {
    if (map[key] > 0) {
      result.push(key);
      map[key]--;
    }
  }

  return result;
};

const arr1 = [1, 2, 2, 3];
const arr2 = [2, 2];

console.log(interSectionOfTwoArrays(arr1, arr2));
console.log("hhhhh");

const interSectionOfTwoArraysSetMethod = function (arr1, arr2) {
  const set = new Set();
  const result = new Set();

  for (let key of arr1) {
    set.add(key);
  }
  console.log(set);

  for (let key of arr2) {
    if (!set[key]) {
      result.add(key);
    }
  }
  return [...result];
};

const intersectionOfTwoObjectsUsingObjects = function (arr1, arr2) {
  const map = {};
  const result = new Set();

  for (let key of arr1) {
    map[key] = (map[key] || 0) + 1;
  }

  for (let key of arr2) {
    if (map[key] !== undefined) {
      result.add(key);
      map[key]--;
    }
  }

  return [...result];
};

// console.log(
//   "interSectionOfTwoArraysSetMethod",
//   interSectionOfTwoArraysSetMethod(arr1, arr2)
// );

// console.log(
//   "intersectionOfTwoObjectsUsingObjects",
//   intersectionOfTwoObjectsUsingObjects(arr1, arr2)
// );

console.log(
  "intersectionOfTwoObjectsUsingObjects",
  intersectionOfTwoObjectsUsingObjects([4, 9, 5], [9, 4, 9, 8, 4])
);
