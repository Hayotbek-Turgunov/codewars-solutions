const countDevelopers = (list) =>
  list.filter((x) => x.continent == "Europe" && x.language == "JavaScript")
    .length;
