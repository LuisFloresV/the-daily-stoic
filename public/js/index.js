/* eslint-disable no-await-in-loop */
/* eslint-disable no-param-reassign */
const reflectionText = document.getElementById('reflection-text');
const refresh = document.getElementById('refresh');

let shouldStop = false;

refresh.addEventListener('click', () => {
  window.location.reload();
});

function sleep(ms) {
  return new Promise((resolve) => { setTimeout(resolve, ms); });
}

async function typingAnimation(element, text) {
  reflectionText.addEventListener('click', () => {
    shouldStop = true;
  });

  for (let x = 0; x < text.length; x += 1) {
    if (shouldStop) {
      reflectionText.innerText = text;
      break;
    }

    element.textContent += text[x];
    await sleep(10);
  }
}

async function init() {
  const response = await fetch('/api/reflection');
  const { reflection } = await response.json();

  await typingAnimation(reflectionText, reflection);
}

init();
