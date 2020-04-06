const voidFn = () => {};

const headsOrTails = () => {
  // console.log(Math.random);
  voidFn();
  const probability = Math.random() < 0.5;
  return probability ? "Heads" : "Tails";
};

module.exports = { headsOrTails, voidFn };
