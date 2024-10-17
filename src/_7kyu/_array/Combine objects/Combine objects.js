function combine(...objects) {
  return objects.reduce((combined, current) => {
    for (let key in current) {
      if (combined.hasOwnProperty(key)) {
        combined[key] += current[key];
      } else {
        combined[key] = current[key];
      }
    }
    return combined;
  }, {});
}
