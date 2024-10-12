# Solution for problem:

[Product Of Maximums Of Array (Array Series #2)](https://www.codewars.com/kata/5a63948acadebff56f000018)

## Instructions

**Description:**
Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series

### Task

Given an array/list [] of integers , Find the product of the k maximal numbers.

### Notes

Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

### Input >> Output Examples

```plaintext
maxProduct ({4, 3, 5}, 2) ==> return (20)
```

#### Explanation:

Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 \_ 4 = 20 .
maxProduct ({8, 10 , 9, 7}, 3) ==> return (720)

#### Explanation:

Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is 8 _ 9 _ 10 = 720 .

```plaintext
maxProduct ({10, 8, 3, 2, 1, 4, 10}, 5) ==> return (9600)
```

#### Explanation:

Since the size (k) equal 5 , then the subsequence of size 5 whose gives product of maxima is 10 _ 10 _ 8 _ 4 _ 3 = 9600 .

```plaintext
maxProduct ({-4, -27, -15, -6, -1}, 2) ==> return (4)
```

#### Explanation:

Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is -4 \_ -1 = 4 .

```plaintext
maxProduct ({10, 3, -1, -27} , 3) return (-30)
```

#### Explanation:

Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is 10 _ 3 _ -1 = -30 .
