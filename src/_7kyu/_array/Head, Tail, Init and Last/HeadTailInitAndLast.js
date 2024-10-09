function head(arr) {
  return arr[0]; // Arrayning birinchi elementini qaytaradi
}

function tail(arr) {
  return arr.slice(1); // Birinchi elementdan keyin qolgan elementlarni qaytaradi
}

function init(arr) {
  return arr.slice(0, -1); // Oxirgi elementdan tashqari barcha elementlarni qaytaradi
}

function last(arr) {
  return arr[arr.length - 1]; // Arrayning oxirgi elementini qaytaradi
}
