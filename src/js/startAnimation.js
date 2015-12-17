const canvas = document.querySelector('.canvas');
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon');

export default color => {
  require.ensure([], require => {
    const { paint, animate } = require('./modules/actions');
      paint(canvas, color);
      animate(sun, 'active');
      animate(moon, 'active');
  });
}