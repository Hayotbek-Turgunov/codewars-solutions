const bump = (x) => (x.split("n").length > 16 ? "Car Dead" : "Woohoo!");

// Ikkinchi usuli
const bumps = (x) =>
  x.split``.filter((e) => e === "n").length > 15 ? "Car Dead" : "Woohoo!";
