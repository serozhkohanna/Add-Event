import { SET_EVENT_FORM } from "../constants/types";

interface applicationState {
  isEventFormOpen: boolean;
}

const initialState: applicationState = {
  isEventFormOpen: false
}

export default function application(state = initialState, action): object {
  switch (action.type) {
	case SET_EVENT_FORM:
	  return {...state, isEventFormOpen: action.payload};
  }
  return state;
}