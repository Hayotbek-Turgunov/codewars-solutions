function multipleOfIndex(array) {
  return array.filter((value, index) => value % index === 0 || value === 0);
}
