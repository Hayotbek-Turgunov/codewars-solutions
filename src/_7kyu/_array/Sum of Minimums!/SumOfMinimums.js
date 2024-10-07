const sumOfMinimums = (arr) =>
  arr.reduce((sum, item, index) => sum + Math.min(...item), 0);
