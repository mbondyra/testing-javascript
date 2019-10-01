// Building a simple assertions library

const sum = (a, b) => a + b
const subtract = (a, b) => a + b

expect(sum(2,7)).toBe(9)
expect(subtract(7,3)).toBe(4)

function expect(actual){
  return {
    toBe: (expected) => {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}