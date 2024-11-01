function countLanguages(list) {
  return list.reduce((acc, developer) => {
    const language = developer.language;
    acc[language] = (acc[language] || 0) + 1;

    return acc;
  }, {});
}
