import React from "react";
import ReactDOM from "react-dom/client";
//Using React.CreateElement
const header = React.createElement(
  "div",
  { className: "title" },
  React.createElement("h1", {}, "I love JS"),
  React.createElement("h2", {}, "Because I have learnt it from Akshay saini"),
  React.createElement(
    "h3",
    {},
    "Now I am using JS in my office, and its amazing"
  )
);
//Using JSX
const Summmary = (
  <div className="title2">
    <h1>"I love React also"</h1>
    <h2>"Because I have learnt this one also from Akshay saini"</h2>
    <h3>"Now I am enjoying it"</h3>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(Summmary);
root.render(header);
root.render(Summmary);

//Create JSX functional component
function FunctionalSummary(){
  return (<div className="title3">
  <h1>"I love WebDev also"</h1>
  <h2>"Because I have learnt this one also from Akshay saini"</h2>
  <h3>"Now I am enjoying it"</h3>
</div>);
}
console.log(FunctionalSummary);
//root.render(functionalSummary());
root.render(<FunctionalSummary />);

//Pass Attribute into the tag in JSX
function HelloWorld(){
  return <h1 color="blue">Hello Devs</h1>;
}
console.log(HelloWorld);
root.render(<HelloWorld ></HelloWorld>);

/*
create a header component from scratch using functional component in jsx
1. Add a logo on left.
2. Add a search bar in middle
3. Add user icon on right
4. Add CSS to make it look nice
*/

const NewHeader = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWMcSqqpX6SJc7LgqfiPbVABUdiJgTaXLs2VO29EEJIf3kuh9qDDd4k3P83U_m1kQDOX8&usqp=CAU" alt="Logo" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="user">
          <img src="https://avatars.githubusercontent.com/u/69319046?v=4" alt="User" />
        </div>
      </div>
    </header>
  );
};
root.render(<NewHeader></NewHeader>);