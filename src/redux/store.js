import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import search from "./reducer";

const store = createStore(search, applyMiddleware(thunk));

export default store;
