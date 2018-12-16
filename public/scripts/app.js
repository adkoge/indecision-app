"use strict";

// JSX - JavaScript XML
// var template = <p>This is JSX from app.js!</p>;
var template = React.createElement(
  "h1",
  null,
  "This is JSX from app.js!"
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
