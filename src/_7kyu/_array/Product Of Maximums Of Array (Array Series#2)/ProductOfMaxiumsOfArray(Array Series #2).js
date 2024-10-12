function maxProduct(numbers, k) {
  // Massivni kamayish tartibida saralash
  let sortedNumbers = numbers.sort((a, b) => b - a);

  // Eng katta `k` ta elementning ko'paytmasini hisoblash
  return sortedNumbers.slice(0, k).reduce((product, num) => product * num, 1);
}
