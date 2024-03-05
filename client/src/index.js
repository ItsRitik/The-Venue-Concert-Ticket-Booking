import "../src/resources/styles.css";
import React from "react";
import ReactDOM from "react-dom";
import AppRoutes from "./AppRoutes";

import { Provider } from "react-redux";
import ReduxStore from "./store";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={ReduxStore()}>

//     </Provider>
//   </React.StrictMode>
// );
ReactDOM.render(
  <React.StrictMode>
    <Provider store={ReduxStore()}>
      <AppRoutes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render( <React.StrictMode> <Provider store={ReduxStore()}> <Routes /> </Provider> </React.StrictMode>, document.getElementById('root')  );
