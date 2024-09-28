function stringy(size) {
  let newStr = "";
  for (let i = 0; i < size; i++) {
    if (i % 2 == 0) {
      newStr += 1;
    } else {
      newStr += 0;
    }
  }
  return newStr;
}
