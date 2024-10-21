function maskify(cc) {
  let masked = "";
  let lastFour = cc.slice(-4);

  for (var i = 0; i < cc.length - 4; i++) {
    masked += "#";
  }

  return masked + lastFour;
}
