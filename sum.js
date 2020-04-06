const sum = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("Arguments must be numbers");
  }
  return x + y;
};

module.exports = { sum };
