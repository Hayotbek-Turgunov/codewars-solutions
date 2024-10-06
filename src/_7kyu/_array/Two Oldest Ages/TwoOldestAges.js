function twoOldestAges(ages) {
  let sortedAges = ages.sort((a, b) => a - b);

  return [sortedAges[sortedAges.length - 2], sortedAges[sortedAges.length - 1]];
}
