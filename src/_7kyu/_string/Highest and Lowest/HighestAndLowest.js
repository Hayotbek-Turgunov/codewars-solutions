function highAndLow(numbers) {
  let num = numbers.split(" ").map((item, index) => Number(item));
  return `${Math.max(...num)} ${Math.min(...num)}`;
}
