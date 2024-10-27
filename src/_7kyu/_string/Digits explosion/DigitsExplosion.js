function explode(s) {
  return s
    .split("")
    .map((d) => {
      let y = "";
      for (let i = 0; i < +d; i++) {
        y += d;
      }
      return y;
    })
    .join("");
}

// Ikkinchi usuli
function explode(s) {
  return s
    .split("")
    .map((e) => e.repeat(+e))
    .join("");
}
