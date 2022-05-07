// import { Hello } from './var'; // CONNECT var.js, DON'T NEED LOADER
// import json from './assets/json.json'; // CONNECT json.json, DON'T NEED LOADER
// import xml from './assets/data.xml'; // CONNECT data.xml, NEED xml-loader
// import csv from './assets/data.csv'; // CONNECT data.csv, NEED csv-loader, papaparse
// import WebpackLogo from './assets/webpack-logo.png'; // CONNECT webpack-logo.png, NEED file-loader (type: 'asset/resource')
// import { internalIP } from 'webpack-dev-server';
import './styles/styles.css'; // CONNECT styles.css, NEED 'style-loader', 'css-loader'
import './styles/scss.scss'; // CONNECT scss.css, NEED 'sass-loader',

const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

const textareaKeyboard = document.createElement('input');
textareaKeyboard.type = 'text';
textareaKeyboard.id = 'input';
textareaKeyboard.classList.add('textareaWindow');
container.append(textareaKeyboard);

const divKeyboard = document.createElement('div');
divKeyboard.id = 'keyboard';
container.append(divKeyboard);

const keyboard = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
  'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift',
  'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift',
  'Control', 'Meta', 'Alt', '&nbsp;', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight',
];

const keyboardKeyCode = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

function init() {
  let out = '';
  for (let i = 0; i < keyboard.length; i += 1) {
    if (i === 14 || i === 29 || i === 42 || i === 55) {
      out += '<br>';
    }
     if (i === 13) {
      out += `<div class="keyboard-key keyboard-key-backspace" data="${keyboardKeyCode[i]}">${keyboard[i]}</div>`;
    } else {
    out += `<div class="keyboard-key" data="${keyboardKeyCode[i]}">${keyboard[i]}</div>`;
    }
  }
  document.querySelector('#keyboard').innerHTML = out;
}

init();

function keydownActive(event) {
  document.querySelectorAll('#keyboard .keyboard-key').forEach((element) => {
    element.classList.remove('active');
  });
  if (!document.querySelector(`#keyboard .keyboard-key[data="${event.code}"]`)) return;
  document.querySelector(`#keyboard .keyboard-key[data="${event.code}"]`).classList.add('active');
  event.preventDefault();
  if (event.code !== 'Backspace') {
  textareaKeyboard.value += event.key;
  }
}

function backspace() {
  const backspaceKey = textareaKeyboard.value;
  textareaKeyboard.value = backspaceKey.substring(0, backspaceKey.length - 1);
}

document.onkeydown = backspace;
document.onkeydown = keydownActive;



// document.onkeydown = function (event) {
//   document.querySelectorAll('#keyboard .keyboard-key').forEach((element) => {
//     element.classList.remove('active');
//   });

//     document.querySelector(`#keyboard .keyboard-key[data="${event.code}"]`).classList.add('active');
//     event.preventDefault();

// };

function keyupActive(event) {
  if (!document.querySelector(`#keyboard .keyboard-key[data="${event.code}"]`)) return;
  document.querySelector(`#keyboard .keyboard-key[data="${event.code}"]`).classList.remove('active');
  event.preventDefault();
}

document.onkeyup = keyupActive;

document.querySelectorAll('#keyboard .keyboard-key').forEach((element) => {
  const elLocal = element;

  function mousedownActive(e) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((el) => {
      el.classList.remove('active');
    });
    // const code = this.getAttribute('data');
    this.classList.add('active');
    textareaKeyboard.value += e.target.innerHTML;
  }

  elLocal.onmousedown = mousedownActive;
  
  // document.addEventListener("mousedown", e => {
    
  //   console.log(e.target.innerHTML);
  //   let valu = e.target.innerHTML
  //   input.value = valu;
  //   });
    


  
  function mouseupActive() {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((el) => {
      el.classList.remove('active');
    });
    // const code = this.getAttribute('data');
    this.classList.remove('active');
  }

  elLocal.onmouseup = mouseupActive;
  elLocal.onmouseout = mouseupActive;
});

// document.onkeydown = function(event) {

//   console.log(input.value)
// }

// document.onkeyup = function (event) {
//     console.log(event.code);
//     keyboard.push(event.key);
//     console.log(keyboard);
// };
