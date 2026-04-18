function nonRepeatingCharacter(val) {
  for (let i = 0; i < val.length; i++) {
    let isUnique = true;
    for (let j = 0; j < val.length; j++) {
      if (i !== j && val[i] === val[j]) {
        isUnique = false;
        break;
      }
    }

    if (isUnique) {
      return val[i];
    }
  }

  return null;
}

console.log(nonRepeatingCharacter("Helllo"));

const firstNonRepeatingCharacterHashmap = function (val) {
  const map = new Map();

  for (let key of val) {
    key = key.toLowerCase();
    if (map[key] !== undefined) {
      map[key] = map[key] + 1;
    } else {
      map[key] = 0;
    }
  }

  for (key of val) {
    key = key.toLowerCase();
    if (!map[key]) {
      return key;
    }
  }
};

const firstUniqueCharacterIDX = function (val) {
  const map = new Map();

  for (let key of val) {
    map.set(key, (map.get(key) || 0) + 1);
  }
  for (let i = 0; i < val.length; i++) {
    if (map.get(val[i]) === 1) {
      return i;
    }
  }

  return -1;
};

const firstUniqueCharacterIDXUseOBJ = function (val) {
  const map = {};

  for (let key of val) {
    map[key] = (map[key] || 0) + 1;
  }

  console.log(map);
  for (let i = 0; i < val.length; i++) {
    if (map[val[i]] === 1) {
      return i;
    }
  }

  return -1;
};

console.log(
  "firstNonRepeatingCharacterHashmap",
  firstNonRepeatingCharacterHashmap("PParagrgaph")
); //A-case-1

console.log("firstUniqueCharacterIDX", firstUniqueCharacterIDX("leetcode")); //B-case 1
console.log(
  "firstUniqueCharacterIDX",
  firstUniqueCharacterIDX("lloveleetcode")
); //B-case 2
console.log("firstUniqueCharacterIDX", firstUniqueCharacterIDX("aabb")); //B-case 3

console.log(firstUniqueCharacterIDXUseOBJ("llovveleetcode"));
console.log(Boolean(3));
