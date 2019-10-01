// setup globals node --require ./fundamentals/5/setup-globals.js fundamentals/5

const {sumAsync, subtractAsync} = require('./math')

test('sumAsync adds numbers asynchronously', async () => {
  const result = await sumAsync(3, 7)
  const expected = 10
  expect(result).toBe(expected)
})

test('subtract subtracts numbers', async () => {
  expect(await subtractAsync(4,3)).toBe(1)
})