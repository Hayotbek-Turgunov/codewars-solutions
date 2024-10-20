String.prototype.toJadenCase = function () {
  return this.split(" ") // So'zlarni bo'laklarga ajratish
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Har bir so'zning birinchi harfini katta qilish
    .join(" "); // So'zlarni qayta birlashtirish
};
