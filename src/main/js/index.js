import _ from 'lodash';
import './../webapp/style.css';
import hello from './hello.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = hello;
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());