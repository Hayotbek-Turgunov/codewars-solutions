const arrayPlusArray = (arr1, arr2) =>
  arr1.concat(arr2).reduce((sum, item, index) => sum + item, 0);
