function isAnagram(str1, str2) {
  // Har ikkala so'zni kichik harfga o'girib, harflarni tartiblaymiz
  let sortedStr1 = str1.toLowerCase().split("").sort().join("");
  let sortedStr2 = str2.toLowerCase().split("").sort().join("");

  // Har ikkala tartiblangan so'zni taqqoslaymiz
  return sortedStr1 === sortedStr2;
}
