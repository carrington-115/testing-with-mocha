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

function division(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not possible");
  } else {
    return a / b;
  }
}

test("Testing division by zero error", () => {
  expect(() => division(1, 0)).toThrow();
});
