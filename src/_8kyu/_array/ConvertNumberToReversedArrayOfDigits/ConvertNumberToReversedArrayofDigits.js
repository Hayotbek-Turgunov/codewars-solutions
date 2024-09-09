const digitize = (n) =>
  n
    .toString()
    .split("")
    .map((item, index) => Number(item))
    .reverse();
