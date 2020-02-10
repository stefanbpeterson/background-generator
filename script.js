const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const bodyGradient = document.getElementById('bodyGradient');
const randomColorButton = document.querySelector('.randomColorButton');

console.log(randomColorButton);

bodyGradient.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

css.textContent = bodyGradient.style.background + ';';

function setGradient() {
  bodyGradient.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';

  css.textContent = bodyGradient.style.background + ';';
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function generateRandomBackground() {
  bodyGradient.style.background = 'linear-gradient(to right, rgb(' + getRandomInt(255) + ', ' + getRandomInt(255) + ', ' + getRandomInt(255) + '), rgb(' + getRandomInt(255) + ', ' + getRandomInt(255) + ', ' + getRandomInt(255) + '))';

  css.textContent = bodyGradient.style.background + ';';
}