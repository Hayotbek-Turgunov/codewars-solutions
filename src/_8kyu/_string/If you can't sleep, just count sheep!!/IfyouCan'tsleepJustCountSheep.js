const countSheep = (num) =>
  [...Array(num)].map((_, i) => `${i + 1} sheep...`).join("");
