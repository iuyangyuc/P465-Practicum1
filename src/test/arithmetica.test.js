const {add} = require('../arithmetica');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

test('adds 2.2 + 3 to equal 5', () => {
  expect(add(2.2, 3)).toBe(5.2);
});

test('12099999999999999999 + 30000000000000 is equal to 5', () => {
  expect(add(2099999999999999999,30000000000000)).toBe(2100030000000000000);
});