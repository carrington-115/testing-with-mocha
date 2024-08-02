test("Boolean", () => {
  expect(true && false).toBe(false);
});

test("Testing objects", () => {
  expect([1, 2, 3]).toEqual([1, 2, 3]);
});
