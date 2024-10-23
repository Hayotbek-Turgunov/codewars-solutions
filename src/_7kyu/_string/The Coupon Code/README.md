# Solution for problem:

[The Coupon Code](https://www.codewars.com/kata/539de388a540db7fec000642)

**Description:**

### Story

Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

### Task

Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

### Examples:

```plaintext
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
```

### Sample Tests

```plaintext
const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(checkCoupon('123','123','September 5, 2014','October 1, 2014'), true);
    assert.strictEqual(checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false);
  });
});
```
