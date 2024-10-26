const countDevelopers = (list) =>
  list.filter(
    (item, index) => item.language == "JavaScript" && item.continent == "Europe"
  ).length;
