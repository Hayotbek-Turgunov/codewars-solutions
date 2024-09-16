var findAverage = (nums) =>
  nums.reduce((sum, item, index) => sum + item, 0) / nums.length;
