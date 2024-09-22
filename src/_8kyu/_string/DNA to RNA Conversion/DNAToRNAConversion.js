const DNAtoRNA = (dna) =>
  dna
    .split("")
    .map((value) => (value === "T" ? "U" : value))
    .join("");
