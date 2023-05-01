import { createHeader } from "./createHeader.js";
import { createMain } from "./createMain.js";
import { firstRowKeys, secondRowKeys, thirdRowKeys, fourthRowKeys, fifthRowKeys } from "./keyList.js";


const initApp = () => {
  const body = document.querySelector('body');

  const header = createHeader(body);
  const main = createMain(body);

  const keyboard = document.querySelector('.main__keyboard');
  const monitor = document.querySelector('.main__monitor');
  //monitor.style.background = 'red';

  const activateKey = (event) => {
    if (event.getModifierState('CapsLock') || event.getModifierState('Shift')) {
      document.querySelectorAll('.keyboard__key').forEach((key) => {
        key.classList.add('letter-key');
      })
    }
    document.querySelector(`.${event.code}`).classList.add('keyboard__key_highlight');
  };

  const deactivateKey = (event) => {
    if (!event.getModifierState('CapsLock') || !event.getModifierState('Shift')) {
      document.querySelectorAll('.keyboard__key').forEach((key) => {
        key.classList.remove('letter-key');
      })
    }
    document.querySelector(`.${event.code}`).classList.remove('keyboard__key_highlight');
  };

  const clickKey = (event) => {
    document.querySelector(`.${event.target.classList[1]}`).classList.add('keyboard__key_highlight');
    monitor.textContent += event.target.textContent;
  };

  const unclickKey = (event) => {
    document.querySelector(`.${event.target.classList[1]}`).classList.remove('keyboard__key_highlight');
  };

  const changeLang = (event) => {
    if (event.ctrlKey && event.altKey) {
      keyboard.classList.toggle('ru');
    }
  }
  body.addEventListener('keydown', changeLang);

  body.addEventListener('keydown', activateKey);
  body.addEventListener('keyup', deactivateKey);
  body.addEventListener('mousedown', clickKey);
  body.addEventListener('mouseup', unclickKey);

}
initApp();
