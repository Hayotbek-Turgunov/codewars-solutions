function removeDuplicateWords(s) {
  let res = s.split(" ").filter((v, i, array) => array.indexOf(v) === i);
  return res.join(" ");
}
