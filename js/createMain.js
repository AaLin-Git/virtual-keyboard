import { createElement } from "./createElement.js";
import { createKeyboard } from "./createKeyboard.js";

export const createMain = (parent) => {
  const main = createElement("main", {
    className: "main",
  });

  const keyboardContainer = createKeyboard(main);

  parent.append(main);

  return main;
}
