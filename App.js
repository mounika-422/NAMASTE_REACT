import React from "react";
import ReactDOM  from "react-dom/client";

/*
header
    logo
    links
body
    search bar
    Resto container
        resto cards
footer
    copyright
    contact info
    links to social media
*/










// const parent = React.createElement(
//   "div",
//   {
//     id: "parent",
//   },
//   [
//     React.createElement("div", { id: "child" }, [
//       React.createElement("h1", {}, "Hello i'm a h1 tag"),
//       React.createElement("h2", {}, "Hello i'm  h2 tag"),
//     ]),
//     React.createElement("div", { id: "child2" }, [
//       React.createElement("h1", {}, "Hello i'm a h1 tag"),
//       React.createElement("h2", {}, "Hello i'm a h2 tag"),
//     ]),
//   ]
// );

//jsx

// const heading = React.createElement(
//   "h1",
//   { id: "head", xyz: "abc" },
//   "Hello world from React"
// );

// console.log(parent); //object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent); //convert objec to h1 tag for us
// const parent=React.createElement("h1",{},"Hello parent here");//React element is an object
const Title = () => <h1 className="head" tabIndex="5">Namaste React using JSX</h1>


//React Component
//Class based component-OLD
// React Functional component -just a normal js function
const num=100;



const HeadingComponent=()=>(
    <div><Title/>
    {Title() /*we can even call like this*/}
         <h1>Namaste js</h1>
        
    </div>
       
)

const root=ReactDOM.createRoot(document.getElementById("root"));
//babel understands as a heading component
root.render(<HeadingComponent/>)//html element


