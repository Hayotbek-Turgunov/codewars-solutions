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

// ikkkinchi usul
const combine = (...objs) =>
  objs.reduce(
    (acc, cur) => (
      Object.keys(cur).forEach((v) => (acc[v] = (acc[v] || 0) + cur[v])), acc
    ),
    {}
  );
