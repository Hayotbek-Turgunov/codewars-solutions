function vowel2index(str) {
  return str
    .split("")
    .map((char, index) => {
      if ("aeiouAEIOU".includes(char)) {
        return index + 1;
      }
      return char;
    })
    .join("");
}
