function getRandomInt(min, max) {
  return min === max ? min : Math.floor(Math.random() * (max - min)) + min;
}

module.exports = { getRandomInt };
