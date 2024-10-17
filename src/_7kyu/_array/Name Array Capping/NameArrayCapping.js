const capMe = (names) =>
  names.map(
    (item, index) => item[0].toUpperCase() + item.slice(1).toLowerCase()
  );
