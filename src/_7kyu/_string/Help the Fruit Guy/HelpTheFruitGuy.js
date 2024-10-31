function removeRotten(bagOfFruits) {
  if (!bagOfFruits || bagOfFruits.length === 0) {
    return [];
  }

  return bagOfFruits.map((item, index) => {
    if (item.startsWith("rotten")) {
      return item.slice(6).toString().toLowerCase();
    } else {
      return item.toString().toLowerCase();
    }
  });
}
