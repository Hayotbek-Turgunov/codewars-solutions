# Solution for problem:

[ Grasshopper - Array Mean](https://www.codewars.com/kata/55d277882e139d0b6000005d)

## Instructions

**Description:**

### Find Mean

Find the mean (average) of a list of numbers in an array.

### Information

To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

For an example list of 1, 3, 5, 7

1. Add all of the numbers

```plaintext
1+3+5+7 = 16
```

2. Divide by the number of values in the list. In this example there are 4 numbers in the list.

```plaintext
16/4 = 4
```

3. The mean (or average) of this list is 4

### Sample Tests

```plaintext
describe('get average', function () {
  it('should return the average', function () {
    Test.assertEquals(findAverage([1]), 1)
    Test.assertEquals(findAverage([1, 3, 5, 7]), 4)
  })
})
```
