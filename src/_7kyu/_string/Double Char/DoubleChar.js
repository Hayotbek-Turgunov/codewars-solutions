const doubleChar = (str) =>
  str
    .split("")
    .map((item, index) => item.repeat(2))
    .join("");
