function getMissingElement(superImportantArray) {
  let sum = 45;

  let sum2 = superImportantArray.reduce((sum, item, index) => sum + item, 0);

  return sum - sum2;
}
