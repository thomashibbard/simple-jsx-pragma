/** @jsx V.create */
/** @jsxFrag V.Fragment */
import V from "Lib/v";

import Header from "./header.component";
import Footer from "./footer.component";

const fruits = [
  { name: "apple", color: "red", shape: "round" },
  { name: "banana", color: "yellow", shape: "oblong" },
  { name: "orange", color: "orange", shape: "round" }
];
const FruitDescriptions = fruits.map(fruit => (
  <>
    <dt>{fruit.name}: </dt>
    <dd style={{ background: "LightGrey", padding: "0.3rem 0.75rem" }}>
      is <span style={{ color: fruit.color }}>{fruit.color}</span> and{" "}
      {fruit.shape}
    </dd>
  </>
));
const SimpleStringOfText = (
  <span style={{ color: "grey" }}>
    &nbsp;&nbsp;A string of text in its own variable
  </span>
);

const definitionList = <dl>{FruitDescriptions}</dl>;

export default () => {
  return (
    <>
      <Header></Header>
      <main>
        <p>
          Paragaph content <small>{SimpleStringOfText}</small>
        </p>
        <div
          style={{
            "display": "flex",
            "justify-content": "space-around",
            "width": "100%"
          }}
        >
          <div style={{ "align-self": "flex-start", "margin-left": "20%" }}>
            <h5>Lists of fruit</h5>
            <ul>
              {fruits.map(fruit => (
                <li>
                  <h5>{fruit.name}</h5>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ "align-self": "flex-end", "margin-right": "20%" }}>
            <h5>
              List of fruit{" "}
              <em
                style={{
                  color: "yellow",
                  background: "black",
                  padding: "10px"
                }}
              >
                AS&nbsp;
                <code style={{ "font-size": "1.6rem" }}>
                  &lt;FRAGMENT&nbsp;/&gt;
                </code>
              </em>
            </h5>
            {definitionList}
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};
