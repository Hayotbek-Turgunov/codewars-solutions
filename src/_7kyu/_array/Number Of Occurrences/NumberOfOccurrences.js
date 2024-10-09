Object.defineProperty(Array.prototype, "numberOfOccurrences", {
  value: function numberOfOccurrences(element) {
    return this.filter(function (x) {
      return x === element;
    }).length;
  },
});
