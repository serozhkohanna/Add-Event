import { combineReducers } from "redux";

import application from './application';
import eventForm from "./eventForm";

const reducer = combineReducers({
  application,
  eventForm
})

export default reducer;