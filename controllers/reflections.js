const { readFile } = require('fs/promises');
const path = require('path');
const { getRandomInt } = require('../utils');

async function getReflections(_req, res) {
  const epictetus = await readFile(path.join(__dirname, 'resources/epictetus.json'), { encoding: 'utf-8' });
  const { reflections } = JSON.parse(epictetus);

  const reflectionAvailable = reflections.length;
  const reflectionIndex = getRandomInt(0, reflectionAvailable - 1);

  res.status(200).json({ reflection: reflections[reflectionIndex] });
}

module.exports = { getReflections };
