function differenceInAges(ages) {
  const youngest = Math.min(...ages);
  const oldest = Math.max(...ages);
  const difference = oldest - youngest;

  return [youngest, oldest, difference];
}
