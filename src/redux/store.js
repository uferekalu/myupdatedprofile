import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//Reducers
import {
  getProjectDetailsReducer,
  getProjectsReducer
} from "./reducers/projectReducers";

const reducer = combineReducers({
  getProjects: getProjectsReducer,
  getProjectDetails: getProjectDetailsReducer
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
