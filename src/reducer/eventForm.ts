import { SET_EVENT } from "../constants/types";

interface EventData {
  events: any;
}

const initialState: EventData = {
  events: []
}

export default function eventForm(state = initialState, action): object {
  switch (action.type) {
	case SET_EVENT:
	  return {...state, events: [...state.events, action.payload]}
  }
  return state;
}