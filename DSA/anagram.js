const s = "anagram";
const t = "nagaram";

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const map = new Map();
  // const map = {};

  for (skey of s) {
    console.log(skey);
    map[skey] = (map[skey] || 0) + 1;
  }

  for (tkey of t) {
    if (!map[tkey]) {
      return false;
    }
    map[key]--;
  }
  return true;
};

console.log(isAnagram(s, t));
