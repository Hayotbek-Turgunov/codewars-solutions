function solution(value) {
  let paddedValue = String(value).padStart(5, "0");

  return `Value is ${paddedValue}`;
}
