import { SET_EVENT, REMOVE_EVENT, EXPAND_EVENT } from "../constants/types";

interface EventData {
  events: any;
}

const initialState: EventData = {
  events: []
}

export default function events(state = initialState, action): object {
  switch (action.type) {
	case SET_EVENT:
	  return {...state, events: [...state.events, action.payload]}
	case REMOVE_EVENT:
	  return {
		...state,
		events: state.events.filter(item => {
		  return item.id !== action.payload.id
		})
	  }

	case EXPAND_EVENT:
	  return {
		...state,
		events: state.events.map(item => {
		  if (item.id === action.payload.id) {
			item.eventExpand = action.payload.eventExpand;
			return item;
		  } else return item;
		})
	  }
  }
  return state;
}