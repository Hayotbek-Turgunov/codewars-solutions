const array = (arr) =>
  arr.split(",").length < 3 ? null : arr.split(",").slice(1, -1).join(" ");
