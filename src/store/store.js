import { combineReducers, createStore } from "redux";
import taskReducer from "./reducers";

const rootReducer = combineReducers({
  tasks: taskReducer,
});

export const store = createStore(rootReducer);
