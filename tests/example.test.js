test("Boolean", () => {
  expect(true && false).toBe(false);
});

test("Testing objects", () => {
  expect([1, 2, 3]).toEqual([1, 2, 3]);
});

test("The falsy test", () => {
  const numbers = { one: 1 };
  expect(numbers.two).toBeFalsy();
});

test("The falsy test", () => {
  const number = 1;
  expect(number).toBeTruthy();
});
