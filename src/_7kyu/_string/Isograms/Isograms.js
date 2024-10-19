function isIsogram(str) {
  // Kichik harflarga o'girish
  str = str.toLowerCase();

  // Satrdagi harflarni tartibga solamiz
  let sortedStr = str.split("").sort();

  // Har bir harfni qo'shnisi bilan solishtiramiz
  return sortedStr.every((char, i) => char !== sortedStr[i + 1]);
}
