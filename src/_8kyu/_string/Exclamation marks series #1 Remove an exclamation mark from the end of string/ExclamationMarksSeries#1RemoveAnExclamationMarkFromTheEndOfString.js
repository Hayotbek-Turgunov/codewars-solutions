const remove = (string) =>
  string.at(-1) == "!" ? string.slice(0, -1) : string;
