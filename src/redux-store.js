import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import catalogReducer from "./reducers/catalog-reducer";
import headerReducer from "./reducers/header-reducer";

const reducers = combineReducers({
    header: headerReducer,
    catalog: catalogReducer,
});

const store = createStore(reducers, composeWithDevTools());

export default store;
