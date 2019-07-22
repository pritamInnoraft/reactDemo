import { combineReducers } from "redux";

import { defaultReducer } from "../Containers/Homepage/reducers";

const rootReducer = combineReducers({
  defaultReducer: defaultReducer
});

export default rootReducer;