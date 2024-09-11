const findAverage = (array) => {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((sum, item, index) => sum + item, 0) / array.length;
};
