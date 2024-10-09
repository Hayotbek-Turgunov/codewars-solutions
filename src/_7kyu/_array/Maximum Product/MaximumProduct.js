function adjacentElementsProduct(array) {
  let maxProduct = array[0] * array[1]; // Dastlabki 2 ta elementni ko'paytirib boshlaymiz
  for (let i = 1; i < array.length - 1; i++) {
    let product = array[i] * array[i + 1];
    if (product > maxProduct) {
      maxProduct = product;
    }
  }
  return maxProduct;
}
