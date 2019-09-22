/** @jsx V.create */
/** @jsxFrag V.Fragment */

import V, { ClassComponent } from "Lib/v";

export default class Button extends ClassComponent {
  constructor(props) {
    super(props);
  }
  handleButtonClick(event) {
    console.log("handleButtonClick", this, event);
  }
  render() {
    return (
      <button onClick={this.handleButtonClick.bind(this)} {...this.props}>
        {this.props.children}
      </button>
    );
  }
}
