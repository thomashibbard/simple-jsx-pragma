import "core-js/stable";

/** @jsx V.create */
/** @jsxFrag V.Fragment */
import V, { render } from "@V";
// console.log({ V, render });

import Main from "./components/main.component";

render(document.getElementById("app"), <h1>hi</h1>);
