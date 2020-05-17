import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Basic_layout from "./Components/Basic_Layout";

import "./styles/common_styles.css";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Basic_layout />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
