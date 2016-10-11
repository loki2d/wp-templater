/* global window */
"use strict";

let moduleName = window.location.pathname.slice(1);
let handler;

try {
  if (!moduleName) {
    moduleName = "home";
  }
  let context = require.context('bundle!./routes/', true, /^\.\//);
  handler = context('./' + moduleName);
} catch (e) {
  console.log(e);
  console.log("No such path");
}

if (handler) {
  handler(function(route) {
    route();
  });
}
