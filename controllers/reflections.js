const { readFile } = require('fs/promises');
const path = require('path');

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

async function getReflections(_req, res) {
  const epictetus = await readFile(path.join(__dirname, 'resources/epictetus.json'), { encoding: 'utf-8' });
  const { reflections } = JSON.parse(epictetus);

  const reflectionAvailable = reflections.length;
  const reflectionIndex = getRandomInt(1, reflectionAvailable);

  res.status(200).json({ reflection: reflections[reflectionIndex].replace(/(\r\n|\n|\r)/gm, '') });
}

module.exports = { getReflections };
