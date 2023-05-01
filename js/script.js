import { createHeader } from "./createHeader.js"

const initApp = () => {
  const body = document.querySelector('body');

  const header = createHeader(body);
}
initApp();
