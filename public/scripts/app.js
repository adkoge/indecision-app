"use strict";

console.log("My app is running");

var app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"]
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "ul",
    null,
    React.createElement(
      "li",
      null,
      "Item one"
    ),
    React.createElement(
      "li",
      null,
      "Item two"
    )
  ),
  app.options.length > 0 ? "Here are your options" : "No options"
);

var count = 0;
var addOne = function addOne() {
  console.log('addOne');
};
var minusOne = function minusOne() {
  console.log('minusOne');
};
var reset = function reset() {
  console.log('reset');
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Count: ",
    count
  ),
  React.createElement(
    "button",
    { onClick: addOne },
    "+1"
  ),
  React.createElement(
    "button",
    { onClick: minusOne },
    "-1"
  ),
  React.createElement(
    "button",
    { onClick: reset },
    "reset"
  )
);

// Challenge
// Make button "-1"

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
