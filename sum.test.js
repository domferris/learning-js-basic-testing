const { sum } = require("./sum");

test("true is true", () => {
  expect(true).toBe(true);
});

test("returns 0 when arguments are not numbers", () => {
  expect(() => {
    sum("a", "b");
  }).toThrow("Arguments must be numbers");
});

test("returns a type number when given two number arguments", () => {
  const result = sum(1, 2);
  expect(typeof result).toBe("number");
});

test("returns 3 when given 1 and 2 as arguments", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

test("returns result of -3 when passed 1 and -4", () => {
  const result = sum(1, -4);
  expect(result).toBe(-3);
});

// TESTING OBJECTS
test("objects are equal", () => {
  const expected = {};
  expect(expected).toBe(expected);
});

test("objects are equal", () => {
  expect([]).toEqual([]);
});
