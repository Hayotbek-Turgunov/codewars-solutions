# Solution for problem:

[Head, Tail, Init and Last](https://www.codewars.com/kata/5b16490986b6d336c900007d)

## Instructions

**Description:**
Haskell has some useful functions for dealing with lists:

```plaintext
$ ghci
GHCi, version 7.6.3: http://www.haskell.org/ghc/  :? for help
λ head [1,2,3,4,5]
1
λ tail [1,2,3,4,5]
[2,3,4,5]
λ init [1,2,3,4,5]
[1,2,3,4]
λ last [1,2,3,4,5]
5
```

Your job is to implement these functions in your given language. Make sure it doesn't edit the array; that would cause problems! Here's a cheat sheet:

```plaintext
| HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |

head [x] = x
tail [x] = []
init [x] = []
last [x] = x
```

Here's how I expect the functions to be called in your language:

```plaintext
head([1,2,3,4,5]); => 1
tail([1,2,3,4,5]); => [2,3,4,5]
```
