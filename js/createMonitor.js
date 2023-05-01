import { createElement } from "./createElement.js";

export const createMonitor = (parent) => {

  const textArea = createElement("textarea", {
    className: "main__monitor",
    rows: 15,
    cols: 111,
  });

  parent.append(textArea);

  return textArea;

}
