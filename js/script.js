import { createHeader } from "./createHeader.js";
import { createMain } from "./createMain.js";
import { firstRowKeys, secondRowKeys, thirdRowKeys, fourthRowKeys, fifthRowKeys } from "./keyList.js";


const initApp = () => {
  const body = document.querySelector('body');

  const header = createHeader(body);
  const main = createMain(body);

  const activateKey = (event) => {
    console.log(event.code);
    document.querySelector(`.${event.code}`).classList.add('keyboard__key_highlight');
  };

  const deactivateKey = (event) => {
    document.querySelector(`.${event.code}`).classList.remove('keyboard__key_highlight');

  };

  body.addEventListener('keydown', activateKey);
  body.addEventListener('keyup', deactivateKey);
}
initApp();
