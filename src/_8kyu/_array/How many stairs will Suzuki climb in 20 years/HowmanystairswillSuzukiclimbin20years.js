function stairsIn20(s) {
  return s.flat().reduce((acc, val) => acc + val, 0) * 20;
}
