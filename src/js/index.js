import "../scss/main.scss";

console.log('Wellcome to the TEST!');

const sayHi = (moduleName, cb) =>
  require.ensure([], require => cb(require(`./${moduleName}`)()));

const btn = document.getElementById('btn');
btn.addEventListener('click', event => sayHi('hello', hello => hello('Dave')));

