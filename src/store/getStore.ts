//@ts-ignore
import { createStore, applyMiddleware } from "redux";
import reducer from '../reducer/index';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { timeFormatting } from '../middleware/timeFormatting';

const store = createStore(
  reducer, composeWithDevTools(applyMiddleware(thunk, timeFormatting))
);

export default store;