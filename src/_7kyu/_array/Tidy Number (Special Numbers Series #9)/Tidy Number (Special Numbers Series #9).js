function tidyNumber(n) {
  let sorted = n.toString().split("").sort().join("");
  return n.toString() === sorted;
}
