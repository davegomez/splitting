import "../scss/main.scss";

console.log('Wellcome to the TEST!');

const getModule = (moduleName, cb) =>
    require.ensure([], require => cb(require(`./${moduleName}`).default));

const btn = document.getElementById('btn');
btn.addEventListener('click', event => getModule('hello', hello => hello('Dave')));

