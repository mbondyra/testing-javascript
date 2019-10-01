
// A test is a code that throws an error when the result is not equal to expected result.

const sum = (a, b) => a + b

const result = sum(2,5)
const expected = 7

if (result  !== expected){
  throw new Error(`Sum is not equal to ${expected}`)
}
