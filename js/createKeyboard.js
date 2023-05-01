import { createElement } from "./createElement.js";
import { firstRowKeys } from "./keyList.js";

export const createKeyboard = (parent) => {
  const container = createElement("div", {
    className: "main__keyboard",
  });

  parent.append(container);

  const row = createElement("div", {
    className: "keyboard__row",
  });

  container.append(row);

  const createKey = data => {
    const key = createElement('div', {
      className: "keyboard__key",
      textContent: data.en,
    });

    if (data.code === 'Backspace') {
      key.classList.add('keyboard__key_wide');
    }

    return key;
  }

  const keys = firstRowKeys.map(createKey);

  row.append(...keys);

  return container;
}

