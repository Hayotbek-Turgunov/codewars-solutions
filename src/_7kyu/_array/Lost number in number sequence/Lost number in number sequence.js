function findDeletedNumber(arr, mixArr) {
  // Asl ketma-ketlikning yig'indisi
  const expectedSum = arr.reduce((sum, num) => sum + num, 0);

  // Aralashgan massivning yig'indisi
  const actualSum = mixArr.reduce((sum, num) => sum + num, 0);

  // Yo'qolgan raqamni topish (expectedSum - actualSum)
  return expectedSum - actualSum;
}
