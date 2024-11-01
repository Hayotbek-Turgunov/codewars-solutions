function absentVowel(str) {
  const vowels = "aeiou";

  for (let i = 0; i < vowels.length; i++) {
    if (!str.includes(vowels[i])) {
      return i;
    }
  }
}
