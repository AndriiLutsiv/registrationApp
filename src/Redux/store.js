import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
const { combineReducers, createStore, applyMiddleware } = require("redux");
const { default: userReducer } = require("./user/userReducer");

const reducers = combineReducers({
  userReducer: userReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
