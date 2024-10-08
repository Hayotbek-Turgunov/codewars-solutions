const evenNumbers = (array, number) =>
  array.filter((item, index) => item % 2 === 0).slice(-number);
