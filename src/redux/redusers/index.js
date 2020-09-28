import { combineReducers } from "redux";

import tracker from "./tracker";

const rootReduser = combineReducers({
  tracker,
});

export default rootReduser;
