let nums = [2, 7, 11, 5];

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; i < nums.length; j++) {
      nums[i] + nums[j] === target ? console.log([i, j]) : null;
    }
  }
};

twoSum(nums, 9);
