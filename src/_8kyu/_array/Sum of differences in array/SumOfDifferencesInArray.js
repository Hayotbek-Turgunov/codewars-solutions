const sumOfDifferences = (arr) =>
  arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
