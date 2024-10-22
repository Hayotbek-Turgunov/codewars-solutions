function reverseWords(str) {
  return str
    .split(" ")
    .map((element) => [...element].reverse().join(""))
    .join(" ");
}
