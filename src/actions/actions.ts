import { SET_EVENT_FORM, SET_EVENT, REMOVE_EVENT, EXPAND_EVENT } from '../constants/types';

export const setEventForm = payload => ({
  type: SET_EVENT_FORM,
  payload
});

export const setEvent = payload => ({
  type: SET_EVENT,
  payload
});

export const removeEvent = payload => ({
  type: REMOVE_EVENT,
  payload
});

export const expandEvent = payload => ({
  type: EXPAND_EVENT,
  payload
});