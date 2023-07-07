import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";
import { getPackages } from "./action";

const rootReducer = combineReducers({
  app: reducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

// Fetch packages data when the store is initialized
store.dispatch(getPackages());

export default store;
