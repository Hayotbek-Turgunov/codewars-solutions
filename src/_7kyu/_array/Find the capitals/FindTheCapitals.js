const capitals = function (word) {
  const result = [];
  word.split("").forEach((letter, i) => {
    if (letter.toUpperCase() === letter) result.push(i);
  });

  return result;
};
