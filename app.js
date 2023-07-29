import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("div", {id: "heading", xyz:"abc"}, 
                    React.createElement("div", {id: "child", xyz:"abc"},
                       [React.createElement("h1",{}, "Hello beta!"),
                        React.createElement("h2",{},"Kese ho??")]));

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
root.render(heading);