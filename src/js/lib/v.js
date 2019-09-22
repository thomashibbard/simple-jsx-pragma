import * as utils from "Utils";

const FRAGMENT = "FRAGMENT";

export default class V {
  static create(node, props, ...children) {
    children = utils.flattenDeep(children);
    if (typeof node === "function") {
      return node();
    } else {
      if (node === FRAGMENT) {
        const fragment = document.createDocumentFragment();
        children.forEach(child => fragment.append(child));
        return fragment;
      }

      let element;
      if (node instanceof HTMLElement) {
        element = node;
      } else {
        element = document.createElement(node);
      }
      if (children) {
        children.forEach(child => {
          if (typeof child === "string") {
            element.append(document.createTextNode(child));
          } else {
            element.append(child);
          }
        });
      }
      if (props) {
        Object.entries(props)
          .filter(this.filterPropsThatShouldNotBeInlined)
          .forEach(([key, value]) => element.setAttribute(key, value));

        if (props.style) {
          Object.entries(props.style).forEach(([key, value]) =>
            element.style.setProperty(key, value)
          );
        }

        if (props.className) {
          element.classList.add(props.className);
        }
      }
      return element;
    }
  }
  static filterPropsThatShouldNotBeInlined(allProps) {
    const propertiesToFilter = ["style", "className"];
    return allProps.filter(prop => propertiesToFilter.includes(prop));
  }

  static isFirstLetterCapitalized(nodeName) {
    return /[A-Z]/.test(nodeName);
  }
}

V.Fragment = FRAGMENT;

export function render(mountNode, element) {
  mountNode.append(element);
}
