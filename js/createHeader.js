import { createElement } from "./createElement.js";

export const createHeader = (parent) => {
  const header = createElement("header", {
    className: "header",
  });

  parent.prepend(header);

  const title = createElement("h1", {
    className: "header__title",
    textContent: "Virtual Keyboard",
  });

  header.append(title);

  return header;
}
