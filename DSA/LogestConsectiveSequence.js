const LogestConsectiveSequence = function (val) {
  let map = {};
  // const set = new Set();
  let maxLength = 0;

  for (let i of map) {
    //here run loop with unique value of array
    map[i] = true;
  }

  console.log("MAP", map);

  for (let key of val) {
    console.log(typeof key);
    if (!map[key - 1]) {
      let current = key;
      let count = 1;

      while (map[current + 1]) {
        current++;
        count++;
      }
      maxLength = Math.max(maxLength, count);
      console.log(maxLength, count);
    }
  }
  return maxLength;
};

const arr1 = [1, 2, 2, 2, 2, 2, 2, 2, 3, 5, 6, 7, 8, 9];

console.log(LogestConsectiveSequence(arr1));
