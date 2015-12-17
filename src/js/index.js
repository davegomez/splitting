import "../scss/main.scss";
import updateColor from './updateColor';

const paintButton = document.getElementById('paint-button');
const colorInput = document.getElementById('color-input');

paintButton.addEventListener('click', event => {
  require.ensure([], require => {
    const startAnimation = require('./startAnimation');
    const color = paintButton.querySelector('.paint-color').textContent;
    startAnimation.default(color);
  });
});

colorInput.addEventListener('change', event => {
  event.preventDefault();
  updateColor(paintButton.querySelector('.paint-color'), colorInput.value);
});
