import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import headerReducer from "./reducers/header-reducer";

const reducers = combineReducers({
    header: headerReducer,
});

const store = createStore(reducers, composeWithDevTools());

export default store;
