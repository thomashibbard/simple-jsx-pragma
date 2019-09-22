import { constants, helpers } from "@Utils/index.ts";

export class V {
  static Fragment = constants.FRAGMENT;
  static propertiesToFilter = ["className", "style"];
  static eventHandlerRegExp = /(on)([A-Z]\w+)/;
  static create(node, props, ...children) {
    children = helpers.flattenDeep(children);
    if (typeof node === "function") {
      if (
        node.prototype.render &&
        typeof node.prototype.render === "function" &&
        node.__SHOULD_CALL_CLASS_CONSTRUCTOR__ === true
      ) {
        return new node({ props, children }).render();
      } else {
        return node(props);
      }
    } else {
      if (node === constants.FRAGMENT) {
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
      if (props && Object.keys(props).length > 0) {
        const propertiesAsArray = Object.entries(props);
        propertiesAsArray
          .filter(this.removePropsThatShouldNotBeInlined, this)
          .forEach(([key, value]) => element.setAttribute(key, value));
        propertiesAsArray
          .filter(this.extractEventHandlers, this)
          .forEach(([camelCaseEventName, handler]) => {
            const eventName = camelCaseEventName
              .replace(this.eventHandlerRegExp, "$2")
              .toLowerCase();
            element.addEventListener(eventName, handler);
          });
        if (props.style) {
          Object.entries(props.style).forEach(([key, value]) =>
            element.style.setProperty(key, value)
          );
        }

        if (props.className) {
          element.classList.add(...props.className.split(" "));
        }
      }
      return element;
    }
  }

  static extractEventHandlers([propKey]) {
    return this.eventHandlerRegExp.test(propKey);
  }

  static removePropsThatShouldNotBeInlined([propKey]) {
    return (
      !this.propertiesToFilter.includes(propKey) &&
      !this.eventHandlerRegExp.test(propKey)
    );
  }

  static isFirstLetterCapitalized(nodeName) {
    return /[A-Z]/.test(nodeName);
  }
}
