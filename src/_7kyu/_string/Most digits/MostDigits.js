function findLongest(array) {
  return array.reduce((longest, current) =>
    current.toString().length > longest.toString().length ? current : longest
  );
}
