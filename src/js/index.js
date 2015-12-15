import "../scss/main.scss";

console.log('Wellcome to the TEST!');

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

const hello = event =>
  require.ensure([], require => {
    const module = require('./modules/first/hello.js');
    module.default('Dave');
  }, 'hello');

const testing = event =>
  require.ensure([], require => {
    const { dave, add } =  require('./modules/second/testing.js');
    console.log(dave);
    console.log(add(2, 4));
  }, 'testing');

btn1.addEventListener('click', hello);
btn2.addEventListener('click', testing);
