const mergeArrays = (arr1, arr2) =>
  arr1
    .concat(arr2)
    .filter((item, index, array) => array.indexOf(item) === index)
    .sort((a, b) => a - b);
