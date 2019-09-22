export class Component {
  static __SHOULD_CALL_CLASS_CONSTRUCTOR__ = true;
  constructor({ props, children }) {
    this.props = { ...props, children };
  }
}
