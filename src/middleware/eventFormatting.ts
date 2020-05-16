import { SET_EVENT, SET_NEW_EVENT_DATA } from "../constants/types";
// @ts-ignore
import moment from 'moment';
import { CURRENT_DATE } from "../constants/currentDate";

export const eventFormatting = store => next => action => {
  const {type, payload} = action;
  if (type === SET_EVENT) {
	const eventDateFormatted = moment(payload.eventDate).format('LL');
	const eventDateFrom = moment(payload.eventDate).fromNow();
	const eventFormatted = {
	  ...payload,
	  eventDate: eventDateFormatted,
	  eventDateFrom,
	  id: Math.round(Math.random() * 100000),
	  // @ts-ignore
	  eventOutdated: CURRENT_DATE - Date.parse(new Date(payload.eventDate)) > 0
	}
	const newAction = {...action, payload: eventFormatted};
	next(newAction);
  } else if (type === SET_NEW_EVENT_DATA) {
	const eventDateFormatted = moment(payload.eventDate).format('LL');
	const eventDateFrom = moment(payload.eventDate).fromNow();
	const eventFormatted = {
	  ...payload,
	  eventDate: eventDateFormatted,
	  // @ts-ignore
	  eventOutdated: CURRENT_DATE - Date.parse(new Date(payload.eventDate)) > 0,
	  eventDateFrom,
	}
	const newAction = {...action, payload: eventFormatted};
	next(newAction);
  } else {
	next(action);
  }
};
