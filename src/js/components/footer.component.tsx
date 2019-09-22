/** @jsx V.create */
/** @jsxFrag V.Fragment */
import V from "@V";
import { isAbsolute } from "path";

export default props => {
  return (
    <footer
      style={{
        "position": "absolute",
        "bottom": 0,
        "width": "100vw",
        "height": "3rem",
        "background": "CornFlowerBlue",
        "color": "white",
        "display": "flex",
        "align-items": "center",
        "justify-content": "center"
      }}
    >
      <div>Some Footer Content</div>
    </footer>
  );
};
