/** @jsx V.create */
/** @jsxFrag V.Fragment */

import V from "@V";

const headerStyles = {
  background: "#797270"
};

const navItemsStyle = {
  "list-style-type": "none",
  "display": "flex"
};

const navItemStyle = {
  color: "white",
  cursor: "pointer",
  padding: "15px"
};

const menuItemsAsObject = {
  home: {
    name: "Home",
    icon: "🏠"
  },
  contact: {
    name: "Contact Us",
    icon: "📝"
  }
};

export default props => {
  return (
    <header style={headerStyles}>
      <nav className="nav">
        <ul style={navItemsStyle} className="nav__items">
          {Object.entries(menuItemsAsObject).map(([key, item]) => (
            <li style={navItemStyle}>
              {item.icon}
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
