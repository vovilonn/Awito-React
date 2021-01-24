import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { updateLS } from "./localStorage";
import store from "./redux-store";


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

store.subscribe(updateLS(store.getState.bind(store)));
