const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "Hello i'm a h1 tag"),
      React.createElement("h2", {}, "Hello i'm a h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "Hello i'm a h1 tag"),
      React.createElement("h2", {}, "Hello i'm a h2 tag"),
    ]),
  ]
);

//jsx

// const heading = React.createElement(
//   "h1",
//   { id: "head", xyz: "abc" },
//   "Hello world from React"
// );

console.log(parent); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //convert objec to h1 tag for us
