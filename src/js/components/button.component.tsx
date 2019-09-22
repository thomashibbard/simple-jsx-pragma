/** @jsx V.create */
/** @jsxFrag V.Fragment */

import V, { Component } from "@V";
console.log({ V });
export default class Button extends Component {
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
