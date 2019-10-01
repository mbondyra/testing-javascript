// support async

const sum = (a, b) => a + b
const subtract = (a, b) => a + b
const subtractAsync = async (a, b) => a + b

test('subtract subtracts numbers', async () => {
    expect(await subtractAsync(4,3)).toBe(1)
  }
)

async function test(title, callback) {
  try{
    await callback()
    console.log(`[ok] ${title}`)
  } catch(error) {
    console.error(`[x] ${title}`)
    console.error(error)
  }
}


function expect(actual) {
  return {
    toBe: (expected) => {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`)
      }
    }
  }
}