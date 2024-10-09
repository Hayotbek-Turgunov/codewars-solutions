const maxTriSum = (numbers) =>
  numbers
    .filter((item, index, array) => array.indexOf(item) === index)
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((sum, item, index) => sum + item, 0);
