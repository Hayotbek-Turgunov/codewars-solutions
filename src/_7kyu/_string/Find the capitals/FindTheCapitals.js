var capitals = function (word) {
  let sum = [];

  word
    .split("")
    .map((item, index) =>
      item == item.toUpperCase() ? sum.push(index) : null
    );
  return sum;
};
