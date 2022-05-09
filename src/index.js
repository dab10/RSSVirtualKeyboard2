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

const textareaKeyboard = document.createElement('textarea');
textareaKeyboard.cols = '50';
textareaKeyboard.rows = '5';
textareaKeyboard.classList.add('textareaWindow');
container.append(textareaKeyboard);

const divKeyboard = document.createElement('div');
divKeyboard.id = 'keyboard';
container.append(divKeyboard);

const keyboard = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete',
  'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&uarr;', 'Shift',
  'Ctrl', '&#10070;', 'Alt', '&nbsp;', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;',
];

const keyboardUpperCaseCapsLock = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Delete',
  'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&uarr;', 'Shift',
  'Ctrl', '&#10070;', 'Alt', '&nbsp;', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;',
];

const keyboardUpperCaseCapsLockShift = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Delete',
  'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter',
  'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', '&uarr;', 'Shift',
  'Ctrl', '&#10070;', 'Alt', '&nbsp;', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;',
];

const keyboardUpperCase = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Delete',
  'Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&uarr;', 'Shift',
  'Ctrl', '&#10070;', 'Alt', '&nbsp;', 'Alt', 'Ctrl', '&larr;', '&darr;', '&rarr;',
];

const keyboardKeyCode = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

const init = () => {
  let out = '';
  for (let i = 0; i < keyboard.length; i += 1) {
    if (i === 14 || i === 29 || i === 42 || i === 55) {
      out += '<br>';
    }
    if (i === 13) {
      out += `<div class="keyboard-key keyboard-key-backspace" data="${keyboardKeyCode[i]}">${keyboard[i]}</div>`;
    } else if (i === 14) {
      out += `<div class="keyboard-key keyboard-key-tab" data="${keyboardKeyCode[i]}">${keyboard[i]}</div>`;
    } else if (i === 28 || i === 53 || i === 55 || i === 56 || i === 57 || i === 59 || i === 60 || i === 61 || i === 62 || i === 63) {
      out += `<div class="keyboard-key keyboard-key-del" data="${keyboardKeyCode[i]}">${keyboard[i]}</div>`;
    } else if (i === 29) {
      out += `<div class="keyboard-key keyboard-key-caps-lock" data="${keyboardKeyCode[i]}">${keyboard[i]}</div>`;
    } else if (i === 42) {
      out += `<div class="keyboard-key keyboard-key-shiftleft" data="${keyboardKeyCode[i]}">${keyboard[i]}</div>`;
    } else if (i === 54) {
      out += `<div class="keyboard-key keyboard-key-shiftright" data="${keyboardKeyCode[i]}">${keyboard[i]}</div>`;
    } else if (i === 41) {
      out += `<div class="keyboard-key keyboard-key-enter" data="${keyboardKeyCode[i]}">${keyboard[i]}</div>`;
    } else if (i === 58) {
      out += `<div class="keyboard-key keyboard-key-space" data="${keyboardKeyCode[i]}">${keyboard[i]}</div>`;
    } else {
      out += `<div class="keyboard-key" data="${keyboardKeyCode[i]}">${keyboard[i]}</div>`;
    }
    document.querySelector('#keyboard').innerHTML = out;
  }
};

init();
let keysdown = true;

const keydownActive = (event) => {
  // document.querySelectorAll('#keyboard .keyboard-key').forEach((element) => {
  //   if (element.innerHTML === event.target.innerHTML || event.code === 'ShiftLeft') {
  //     element.classList.remove('active');
  //   }
  // });
  if (!document.querySelector(`#keyboard .keyboard-key[data="${event.code}"]`)) return;

  if (event.code !== 'ShiftLeft' && event.code !== 'ShiftRight' && event.code !== 'CapsLock') {
    document.querySelector(`#keyboard .keyboard-key[data="${event.code}"]`).classList.add('active');
  }

  event.preventDefault();
  if (event.code === 'Backspace') {
    const startPos = textareaKeyboard.selectionStart;
    if (startPos > 0) {
      textareaKeyboard.setRangeText('', startPos - 1, startPos, 'end');
    }
  } else if (event.code === 'Tab') {
    const startPos = textareaKeyboard.selectionStart;
    textareaKeyboard.setRangeText('    ', startPos, startPos, 'end');
    // console.log(textareaKeyboard.value.code);
  } else if (event.code === 'Enter') {
    // textareaKeyboard.value += '\n';
    const startPos = textareaKeyboard.selectionStart;
    // textareaKeyboard.value = deleteKey.substring(0, deleteKey.length - 1);
    textareaKeyboard.setRangeText('\n', startPos, startPos, 'end');
  } else if (event.code === 'Delete') {
    // const deleteKey = textareaKeyboard.value;
    const startPos = textareaKeyboard.selectionStart;
    // textareaKeyboard.value = deleteKey.substring(0, deleteKey.length - 1);
    textareaKeyboard.setRangeText('', startPos, startPos + 1, 'end');
  } else if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    // textareaKeyboard.value += '';

    if (event.repeat !== undefined) { keysdown = !event.repeat; }
    if (!keysdown) return;
    keysdown = false;
    document.querySelector(`#keyboard .keyboard-key[data="${event.code}"]`).classList.add('active');
  } else if (event.code === 'CapsLock') {
    if (event.repeat !== undefined) { keysdown = !event.repeat; }
    if (!keysdown) return;
    keysdown = false;

    document.querySelector(`#keyboard .keyboard-key[data="${event.code}"]`).classList.toggle('active');
  } else if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
    textareaKeyboard.value += '';
  } else if (event.code === 'AltLeft' || event.code === 'AltRight') {
    textareaKeyboard.value += '';
  } else if (event.code === 'MetaLeft') {
    textareaKeyboard.value += '';
  } else if (event.code === 'Space') {
    const startPos = textareaKeyboard.selectionStart;
    // textareaKeyboard.value = deleteKey.substring(0, deleteKey.length - 1);
    textareaKeyboard.setRangeText(' ', startPos, startPos, 'end');
  } else {
    const startPos = textareaKeyboard.selectionStart;
    const backspaceKey = textareaKeyboard.value;
    let text = '';
    text += document.querySelector(`#keyboard .keyboard-key[data="${event.code}"]`).innerHTML;

    textareaKeyboard.value = backspaceKey.substring(0, startPos) + text + backspaceKey.substring(startPos);
    const pos = textareaKeyboard.value.indexOf(document.querySelector(`#keyboard .keyboard-key[data="${event.code}"]`).innerHTML, startPos);
    // textareaKeyboard.setSelectionRange( textareaKeyboard.selectionStart, textareaKeyboard.selectionStart );
    // textareaKeyboard.setRangeText( textareaKeyboard.value );
    // textareaKeyboard.setSelectionRange( textareaKeyboard.selectionEnd, textareaKeyboard.selectionEnd );
    textareaKeyboard.setRangeText(document.querySelector(`#keyboard .keyboard-key[data="${event.code}"]`).innerHTML, pos, pos + 1, 'end');
    console.log(document.querySelector(`#keyboard .keyboard-key[data="${event.code}"]`).innerHTML);
    // text.split('').reverse().join('');
  }
};

document.addEventListener('keydown', (event) => {
  if (event.repeat !== undefined) { keysdown = !event.repeat; }
  if (!keysdown) return;
  keysdown = false;

  if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && (!document.querySelector('.keyboard-key-caps-lock').classList.contains('active'))) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
      element.innerHTML = keyboardUpperCase[index];
    });
  }

  if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && (document.querySelector('.keyboard-key-caps-lock').classList.contains('active'))) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
      element.innerHTML = keyboardUpperCaseCapsLockShift[index];
    });
  }

  if (!(event.code === 'ShiftLeft' && event.code === 'ShiftRight') && (event.code === 'CapsLock')) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
      element.innerHTML = keyboardUpperCaseCapsLock[index];
    });
  }

  if (event.code === 'CapsLock' && document.querySelector('.keyboard-key-caps-lock').classList.contains('active')) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
      element.innerHTML = keyboard[index];
    });
  }

  if ((document.querySelector('.keyboard-key-shiftleft').classList.contains('active') || document.querySelector('.keyboard-key-shiftright').classList.contains('active')) && (event.code === 'CapsLock')) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
      element.innerHTML = keyboardUpperCaseCapsLockShift[index];
    });
  }

  if ((document.querySelector('.keyboard-key-shiftleft').classList.contains('active') || document.querySelector('.keyboard-key-shiftright').classList.contains('active')) && (event.code === 'CapsLock' && document.querySelector('.keyboard-key-caps-lock').classList.contains('active'))) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
      element.innerHTML = keyboardUpperCase[index];
    });
  }

  // if (((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && (!document.querySelector('.keyboard-key-caps-lock').classList.contains('active'))) && event.code === 'CapsLock') {
  //   document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
  //     element.innerHTML = keyboardUpperCaseCapsLockShift[index];
  //   });
  // }
});

document.addEventListener('keyup', (event) => {
  if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && (!document.querySelector('.keyboard-key-caps-lock').classList.contains('active'))) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
      element.innerHTML = keyboard[index];
    });
  }

  if ((event.code === 'ShiftLeft' || event.code === 'ShiftRight') && document.querySelector('.keyboard-key-caps-lock').classList.contains('active')) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((element, index) => {
      element.innerHTML = keyboardUpperCaseCapsLock[index];
    });
  }
});

// function backspace() {
//   const backspaceKey = textareaKeyboard.value;
//   console.log(backspaceKey.value);
//   textareaKeyboard.value = backspaceKey.substring(0, backspaceKey.length - 1);
// }

// document.querySelector('.keyboard-key-backspace').addEventListener('keydown', backspace);

// document.onkeydown = backspace;
document.onkeydown = keydownActive;
// document.onkeydown = keyShift;

// document.onkeydown = function (event) {
//   document.querySelectorAll('#keyboard .keyboard-key').forEach((element) => {
//     element.classList.remove('active');
//   });

//     document.querySelector(`#keyboard .keyboard-key[data="${event.code}"]`).classList.add('active');
//     event.preventDefault();

// };

const keyupActive = (event) => {
  keysdown = true;
  if (!document.querySelector(`#keyboard .keyboard-key[data="${event.code}"]`)) return;

  if (event.code !== 'CapsLock') {
    document.querySelector(`#keyboard .keyboard-key[data="${event.code}"]`).classList.remove('active');
  }
  event.preventDefault();
};

document.onkeyup = keyupActive;

document.querySelectorAll('#keyboard .keyboard-key').forEach((element) => {
  const elLocal = element;

  function mousedownActive(e) {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((el) => {
      if (!(document.querySelector('.keyboard-key-caps-lock').classList.contains('active') || (document.querySelector('.keyboard-key-shiftleft').classList.contains('active') || document.querySelector('.keyboard-key-shiftright').classList.contains('active')))) {
        el.classList.remove('active');
      }
    });
    // const code = this.getAttribute('data');
    this.classList.add('active');
    textareaKeyboard.value += e.target.innerHTML;
    return false;
  }

  elLocal.onmousedown = mousedownActive;

  // document.addEventListener("mousedown", e => {

  //   console.log(e.target.innerHTML);
  //   let valu = e.target.innerHTML
  //   input.value = valu;
  //   });

  function mouseupActive() {
    document.querySelectorAll('#keyboard .keyboard-key').forEach((el) => {
      if (!(document.querySelector('.keyboard-key-caps-lock').classList.contains('active') || (document.querySelector('.keyboard-key-shiftleft').classList.contains('active') || document.querySelector('.keyboard-key-shiftright').classList.contains('active')))) {
        el.classList.remove('active');
      }
    });
    // const code = this.getAttribute('data');
    this.classList.remove('active');
  }

  elLocal.onmouseup = mouseupActive;
});

// document.onkeydown = function(event) {

//   console.log(input.value)
// }

// document.onkeyup = function (event) {
//     console.log(event.code);
//     keyboard.push(event.key);
//     console.log(keyboard);
// };
document.body.onselectstart = () => false