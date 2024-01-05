const reflection = document.getElementById('reflection-text');

fetch('/api/reflection')
  .then((response) => response.json())
  .then((data) => { reflection.innerText = JSON.stringify(data.reflection); });
