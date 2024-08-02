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

function testingAsyncTest(callback) {
  setTimeout(() => {
    callback("hello world");
  }, 1000);
}

// testing asynchronous functions

// 1. callbacks

test("Testing async callbacks", (done) => {
  function callback(data) {
    try {
      expect(data).toBe("hello world");
      done();
    } catch (error) {
      done(error);
    }
  }
  testingAsyncTest(callback);
});

// 2. promise

function testingPromiseAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello world");
    }, 1000);
  });
}

// if promise passes
test("Testing the promise", () => {
  return expect(testingPromiseAsync()).resolves.toBe("hello world");
});

// if promise fails
test("Testing if promise fails", () => {
  return expect(testingPromiseAsync()).rejects.toThrow("error");
});
