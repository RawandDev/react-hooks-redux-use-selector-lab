import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import usersReducer from "./features/users/usersSlice";

// add imports and code
import { Provider } from "react-redux";
import { createStore } from "redux";

ReactDOM.render(
  // add imports and code
  <React.StrictMode>
    <Provider store={createStore(usersReducer)}>
      <App />,
    </Provider>
  </React.StrictMode>,
  // add imports and code
  document.getElementById("root")
);
