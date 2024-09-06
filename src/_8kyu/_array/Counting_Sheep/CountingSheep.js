function countSheeps(sheep) {
  let sum = 0;

  for (let i = 0; i < sheep.length; i++) {
    if (true === sheep[i]) {
      sum++;
    }
  }

  return sum;
}
