const distinct = (a) =>
  a.filter((item, index, array) => array.indexOf(item) === index);
