const min = (arr, toReturn) =>
  toReturn === "value" ? Math.min(...arr) : arr.indexOf(Math.min(...arr));
