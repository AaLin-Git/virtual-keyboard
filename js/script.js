import { createHeader } from "./createHeader.js";
import { createMain } from "./createMain.js";
import { firstRowKeys, secondRowKeys, thirdRowKeys, fourthRowKeys, fifthRowKeys } from "./keyList.js";


const initApp = () => {
  const body = document.querySelector('body');

  const header = createHeader(body);
  const main = createMain(body);

  const monitor = document.querySelector('.monitor__text');
  const keyboard = document.querySelector('.main__keyboard');

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

  const changeLang = (event) => {
    if (event.ctrlKey && event.altKey) {
      keyboard.classList.toggle('ru');
    }
  }
  body.addEventListener('keydown', changeLang);

  body.addEventListener('keydown', activateKey);
  body.addEventListener('keyup', deactivateKey);

}
initApp();
