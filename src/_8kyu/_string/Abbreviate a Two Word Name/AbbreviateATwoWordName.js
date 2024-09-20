const abbrevName = (name) =>
  name
    .split(" ")
    .map((value) => value[0])
    .join(".")
    .toUpperCase();
