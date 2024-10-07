function rowWeights(array) {
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      count1 += array[i];
    } else {
      count2 += array[i];
    }
  }

  return [count1, count2];
}
