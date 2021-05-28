const twoSum = function (nums, target) {
  const tracker = {};

  for (let i = 0; i < nums.length; i++) {
    if (tracker[nums[i]] >= 0) return [tracker[nums[i]], i]
    tracker[target - nums[i]] = i
  }

};

console.log(twoSum(nums = [7, 11, 15, 2], target = 9))
