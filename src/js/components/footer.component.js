/** @jsx V.create */
/** @jsxFrag V.Fragment */
import V from "Lib/v";
import { isAbsolute } from "path";

export default () => (
  <footer
    style={{
      "position": "absolute",
      "bottom": 0,
      "width": "100vw",
      "height": "3rem",
      "background": "CornFlowerBlue",
      "color": "white",
      "display": "flex",
      "padding": "0.75rem",
      "align-items": "center",
      "justify-content": "center"
    }}
  >
    <div>Some Footer Content</div>
  </footer>
);
