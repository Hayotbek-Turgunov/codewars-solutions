function cubeOdd(arr) {
  if (!arr.every((num) => typeof num === "number")) {
    return undefined;
  }

  // Har bir elementni kubga ko'tarib, toq sonlarning yig'indisini hisoblash
  return arr
    .map((num) => Math.pow(num, 3)) // Har bir elementni kubga ko'taramiz
    .filter((num) => num % 2 !== 0) // Faqat toq sonlarni ajratib olamiz
    .reduce((acc, curr) => acc + curr, 0); // Toq sonlarning yig'indisini hisoblaymiz
}
