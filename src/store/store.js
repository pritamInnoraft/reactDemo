import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk"
import rootReducer from "./reducers";

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)))