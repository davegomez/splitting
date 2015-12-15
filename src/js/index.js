import "../scss/main.scss";

console.log('Wellcome to the TEST!');

function getTemplate(templateName, callback) {
  require(["./" + templateName], function(tmpl) {
    callback(tmpl);
  });
}

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

btn1.addEventListener('click', event => getTemplate('first/hello', hello => hello.default('Dave')));
btn2.addEventListener('click', event => getTemplate('second/testing', testing => {
  const { dave, add } = testing;
  console.log(dave);
  console.log(add(2, 4));
}));



