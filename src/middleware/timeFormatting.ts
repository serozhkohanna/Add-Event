import { SET_EVENT } from "../constants/types";
// @ts-ignore
import moment from 'moment';

let now = moment().format('LLLL');

export const timeFormatting = store => next => action => {
  const {type, payload} = action;
  if (type === SET_EVENT) {
	const eventDateFormatted = moment(payload.eventDate).format('LL');
	const eventDateFrom = moment(payload.eventDate).fromNow();
	const eventFormatted = {
	  ...payload,
	  eventDate: eventDateFormatted,
	  eventDateFrom
	}
	const newAction = {...action, payload: eventFormatted};
	next(newAction);
  } else {
	next(action);
  }
};
