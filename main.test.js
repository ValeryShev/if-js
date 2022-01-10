const min = require('./main')

test('min number', () => {
    expect(min(3,10)).toBe(3)
})
test('min number', () => {
    expect(min(132,16)).toBe(16)
})
test('min number', () => {
    expect(min(769,608)).toBe(608)
})