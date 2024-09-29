function multiTable(number) {
  let result = "";

  for (let i = 1; i <= 10; i++) {
    result += `${i} * ${number} = ${i * number}`;

    // Faqat 10-bo'lmagan qatorlarga yangi qator qo'shamiz
    if (i < 10) {
      result += "\n";
    }
  }

  return result;
}
