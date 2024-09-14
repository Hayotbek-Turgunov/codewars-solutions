const findMultiples = (int, limit) =>
  Array.from({ length: parseInt(limit / int) }, (_, i) => (i + 1) * int);
