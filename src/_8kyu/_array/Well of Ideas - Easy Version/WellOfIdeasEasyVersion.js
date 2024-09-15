function well(x) {
  const book = x.filter((idea) => idea === "good").length;
  return book < 1 ? "Fail!" : book < 3 ? "Publish!" : "I smell a series!";
}
