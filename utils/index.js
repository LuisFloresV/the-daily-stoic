function getRandomInt(min, max) {
  return min === max ? min : Math.floor(Math.random() * (max - min)) + min;
}

function removeLineBreaks(str) {
  return str.replace(/(\r\n|\n|\r)/gm, '');
}

module.exports = { getRandomInt, removeLineBreaks };
