const constainsDuplicates = function (val) {
  const map = new Map();
  let maxCount = 0;

  for (let key of val) {
    key = key.toLowerCase();

    if (!map[key]) {
      map[key] = 1;
    } else {
      map[key] = map[key] + 1;
    }
  }

  console.log(map);

  for (let key of val) {
    key = key.toLowerCase();
    if (map[key] > maxCount) {
      maxCount = map[key];
    }
  }
  console.log(maxCount);
};

constainsDuplicates("Paragraph");
