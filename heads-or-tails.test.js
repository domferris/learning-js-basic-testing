const { headsOrTails } = require("./heads-or-tails");

test("Math.random is called within headsOrTails", () => {
  const randomSpy = jest.spyOn(global.Math, "random");
  headsOrTails();
  expect(randomSpy).toHaveBeenCalled();
});

test("when probability is less than 0.5, gives Heads", () => {
  global.Math.random = jest.fn().mockReturnValueOnce(0.4);
  expect(headsOrTails()).toBe("Heads");
});

test("when probability is greater than 0.5, gives Tails", () => {
  global.Math.random = jest.fn().mockReturnValueOnce(0.6);
  expect(headsOrTails()).toBe("Tails");
});
