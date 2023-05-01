import { createElement } from "./createElement.js";
import { firstRowKeys, secondRowKeys, thirdRowKeys, fourthRowKeys, fifthRowKeys } from "./keyList.js";

export const createKeyboard = (parent) => {
  const container = createElement("div", {
    className: "main__keyboard",
  });

  parent.append(container);

  const firstRow = createElement("div", {
    className: "keyboard__row",
  });
  const secondRow = createElement("div", {
    className: "keyboard__row",
  });
  const thirdRow = createElement("div", {
    className: "keyboard__row",
  });
  const fourthRow = createElement("div", {
    className: "keyboard__row",
  });
  const fifthRow = createElement("div", {
    className: "keyboard__row",
  });

  container.append(firstRow, secondRow, thirdRow, fourthRow, fifthRow);

  const createKey = data => {
    const key = createElement('div', {
      className: `keyboard__key ${data.code}`,
      textContent: data.en,
    });

    if (data.code === 'Backspace' || data.code === 'CapsLock' || data.code === 'Enter' || data.code === 'ShiftLeft' || data.code === 'ShiftRight') {
      key.classList.add('keyboard__key_wide');
    }

    if (data.code === 'Space') {
      key.classList.add('keyboard__key_space');
    }

    return key;
  }

  const firstKeysArr = firstRowKeys.map(createKey);
  const secondKeysArr = secondRowKeys.map(createKey);
  const thirdKeysArr = thirdRowKeys.map(createKey);
  const fourthKeysArr = fourthRowKeys.map(createKey);
  const fifthKeysArr = fifthRowKeys.map(createKey);

  firstRow.append(...firstKeysArr);
  secondRow.append(...secondKeysArr);
  thirdRow.append(...thirdKeysArr);
  fourthRow.append(...fourthKeysArr);
  fifthRow.append(...fifthKeysArr);

  return container;
}

