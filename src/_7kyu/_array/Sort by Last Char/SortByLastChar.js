const last = (words) =>
  words.split(" ").sort((a, b) => a.slice(-1) > b.slice(-1));
