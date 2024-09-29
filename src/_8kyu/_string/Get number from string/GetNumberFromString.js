const getNumberFromString = (s) =>
  Number(
    s
      .split("")
      .filter((item) => "0123456789".includes(item))
      .join("")
  );
