function correct(string) {
  return string.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I");
}

// 2 usul

function correct(stringe) {
  return stringe
    .split("")
    .map((char) => {
      if (char === "5") return "S";
      else if (char === "0") return "O";
      else if (char === "1") return "I";
      else return char;
    })
    .join("");
}
