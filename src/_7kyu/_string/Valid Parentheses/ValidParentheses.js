function validParentheses(parenStr) {
  let count = 0;

  for (let i = 0; i < parenStr.length; i++) {
    // Ochilgan qavs bo'lsa countni oshiramiz
    if (parenStr[i] === "(") {
      count++;
    }
    // Yopilgan qavs bo'lsa countni kamaytiramiz
    else if (parenStr[i] === ")") {
      count--;
    }

    // Har qanday joyda count manfiy bo'lsa noto'g'ri, qaytamiz false
    if (count < 0) {
      return false;
    }
  }

  // Oxirida count 0 bo'lsa barcha qavslar juft bo‘lgan, aks holda noto‘g‘ri
  return count === 0;
}
