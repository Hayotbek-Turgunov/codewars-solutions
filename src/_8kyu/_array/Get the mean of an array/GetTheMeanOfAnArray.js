const getAverage = (marks) =>
  Math.floor(marks.reduce((sum, item, index) => sum + item, 0) / marks.length);
