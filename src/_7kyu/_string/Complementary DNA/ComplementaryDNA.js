function DNAStrand(dna) {
  let res = dna.split("").map((value) => {
    if (value === "A") {
      return "T";
    } else if (value === "T") {
      return "A";
    } else if (value === "G") {
      return "C";
    } else if (value === "C") {
      return "G";
    }
  });

  return res.join("");
}
