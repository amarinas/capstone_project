import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { ContextProvider } from "./Context";
import App from "./App";

ReactDom.render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
    ,
  </ContextProvider>,
  document.getElementById("root")
);
