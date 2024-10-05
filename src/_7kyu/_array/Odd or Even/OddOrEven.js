const oddOrEven = (array) =>
  array.reduce((sum, item, index) => sum + item, 0) % 2 === 0 ? "even" : "odd";
