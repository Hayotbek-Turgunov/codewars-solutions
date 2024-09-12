const points = (games) =>
  games.reduce(
    (sum, curr) => sum + (curr[0] > curr[2] ? 3 : curr[0] < curr[2] ? 0 : 1),
    0
  );
