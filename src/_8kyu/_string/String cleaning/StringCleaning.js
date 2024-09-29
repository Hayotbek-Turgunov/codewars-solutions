function stringClean(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (!"0123456789".includes(s[i])) {
      result += s[i];
    }
  }
  return result;
}

// 2 usul

function stringClean(s) {
  return s
    .split("") // Stringni belgilar massivi qilib ajratamiz
    .filter((char) => !"0123456789".includes(char)) // Raqamlar bo'lmagan belgilarni filtrlab olamiz
    .join(""); // Filtrlangan belgilarni yana stringga birlashtiramiz
}
