const reflection = document.getElementById('reflection-text');


fetch('/api/reflection')
  .then((response) => response.json())
  .then((data) => { reflection.innerText = JSON.stringify(data.reflection); });

function refresh() {
  window.location.reload();
}

const div = document.querySelector(".reflection-text");
let text = reflection.innerText;

function typingAnimation(element, text, i = 0) {

  let timer;
  reflection.addEventListener("click", () => {
    reflection.innerText = "Click event";
    clearTimeout(timer);
  })

  if (i === 0) {
    element.textContent = "";
  }

  element.textContent += text[i];

  if (i === text.length - 1) {
    return;
  }

  timer = setTimeout(() => typingAnimation(element, text, i + 1), 60);
}

typingAnimation(div, text);

