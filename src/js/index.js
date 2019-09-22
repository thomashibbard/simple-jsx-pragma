import "core-js/stable";
// import "regenerator-runtime/runtime";

/** @jsx v.create */
/** @jsxFrag v.Fragment */
import v, { render } from "Lib/v";

import Main from "./components/main.component";

render(document.getElementById("app"), <Main />);
