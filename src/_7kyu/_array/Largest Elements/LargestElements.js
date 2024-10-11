function largest(n, array) {
  if (n === 0) {
    return [];
  }

  return array.sort((a, b) => a - b).slice(-n);
}
