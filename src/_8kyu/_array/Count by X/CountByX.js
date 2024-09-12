const countBy = (x, n) =>
  Array.from({ length: n }, (_, i) => i + 1).map((a) => a * x);
