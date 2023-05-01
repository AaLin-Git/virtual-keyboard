import { createElement } from "./createElement.js";

export const createKeyboard = (parent) => {
  const container = createElement("div", {
    className: "main__keyboard",
  });

  parent.append(container);

  const row = createElement("div", {
    className: "keyboard__row",
  });

  container.append(row);

  return container;
}

