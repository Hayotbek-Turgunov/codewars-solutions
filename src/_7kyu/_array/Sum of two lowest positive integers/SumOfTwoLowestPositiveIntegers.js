var sumTwoSmallestNumbers = (numbers) =>
  numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((a, b) => a + b);
