function sortMyString(S) {
  let ar = S.split("")
    .filter((v, i, a) => i % 2 == 0)
    .join("");
  let ar1 = S.split("")
    .filter((v, i, a) => i % 2 !== 0)
    .join("");
  return `${ar} ${ar1}`;
}
