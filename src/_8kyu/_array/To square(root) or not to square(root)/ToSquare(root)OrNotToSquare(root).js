const squareOrSquareRoot = (array) =>
  array.map((a) => (Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : a * a));
