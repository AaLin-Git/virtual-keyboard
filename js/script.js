import { createHeader } from "./createHeader.js";
import { createMain } from "./createMain.js";

const initApp = () => {
  const body = document.querySelector('body');

  const header = createHeader(body);
  const main = createMain(body);
}
initApp();
