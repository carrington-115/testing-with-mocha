const sum = require("../functions/sum");

test("The sum of 1 + 2 = 3", () => {
  expect(sum(1, 2)).toBe(3);
});
