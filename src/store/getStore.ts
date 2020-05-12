//@ts-ignore
import { createStore, applyMiddleware } from "redux";
import reducer from '../reducer/index';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { eventFormatting } from '../middleware/eventFormatting';

const store = createStore(
  reducer, composeWithDevTools(applyMiddleware(thunk, eventFormatting))
);

export default store;