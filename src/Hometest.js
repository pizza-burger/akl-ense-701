import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { expect } from "chai";
var jsdom = require("mocha-jsdom");

import Home from "./Home.js";

global.document = jsdom({
    url: "http://localhost:3000/"
  });

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("Home Component Testing", () => {
    it("Renders Home Components", () => {
      act(() => {
        ReactDOM.render(<Home />, rootContainer);
      });
      const h1 = rootContainer.querySelector("h1");
      expect(h1.textContent).to.equal("SEER MENU");
    });
  });