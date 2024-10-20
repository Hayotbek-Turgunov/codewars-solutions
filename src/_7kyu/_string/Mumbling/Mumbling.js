function accum(s) {
  return s
    .split("") // So'zni belgilar massiviga bo'lib olamiz
    .map(
      (
        char,
        index // Har bir belgini kerakli shaklda qayta ishlaymiz
      ) =>
        char.toUpperCase() + // Belgining birinchisini katta harfga o'zgartiramiz
        char.toLowerCase().repeat(index) // Belgini 'index' marta kichik harfda takrorlaymiz
    )
    .join("-"); // Natijani defis orqali birlashtiramiz
}
