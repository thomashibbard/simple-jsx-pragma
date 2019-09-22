/** @jsx V.create */
/** @jsxFrag V.Fragment */
import V from "@V";
console.log({ V });
import Header from "./header.component";
import Footer from "./footer.component";
import Button from "./button.component";

const fruits = [
  { name: "apple", color: "red", shape: "round" },
  { name: "banana", color: "yellow", shape: "oblong" },
  { name: "orange", color: "orange", shape: "round" }
];
const FruitDescriptions = fruits.map(fruit => (
  <V.Fragment>
    <dt>{fruit.name}: </dt>
    <dd style={{ background: "LightGrey", padding: "0.3rem 0.75rem" }}>
      is <span style={{ color: fruit.color }}>{fruit.color}</span> and{" "}
      {fruit.shape}
    </dd>
  </V.Fragment>
));
console.log("FruitDescriptions", FruitDescriptions);
const SimpleStringOfText = (
  <span style={{ color: "grey" }}>
    &nbsp;&nbsp;A string of text in its own variable
  </span>
);

const definitionList = <dl>{FruitDescriptions}</dl>;

const MyCustomButton = (
  <Button text="Button text" style={{ "margin-top": "1.5rem" }}>
    <strong>
      <em>Click this Button</em>
    </strong>
  </Button>
);

function handleClick(event) {
  console.log("handleClick", this, event);
}
function handleMouseEnter(event) {
  console.log("handleMouseEnter", this, event);
}
function handleMouseLeave(event) {
  console.log("handleMouseLeave");
}
export default props => {
  return (
    <>
      <Header headerProp={{ my: "data", arr: [1, 2, 33] }}></Header>
      <main>
        <p>
          Paragaph content <small>{SimpleStringOfText}</small>
        </p>

        <button
          myProp={{ some: "json", data: [1, 2, 3, 4] }}
          style={{ color: "red", border: "3px double grey" }}
          className="btn btn-primary"
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Click this
        </button>
        <MyCustomButton></MyCustomButton>
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
      <Footer footerProp={{ fname: "thomas" }}>></Footer>
    </>
  );
};
