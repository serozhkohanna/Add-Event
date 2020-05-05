import React, { useState } from 'react';
import { connect } from 'react-redux';
import './EventForm.scss';
import { setEvent, setEventForm } from "../../actions/actions";
import { EventDataInterface } from "../../constants/eventData.interface";
import { TwitterPicker } from 'react-color';
import CloseBtn from "../CloseBtn/CloseBtn";

import { CURRENT_DATE } from "../../constants/currentDate";

interface Props {
  isEventFormOpen: boolean;
  eventTitleField: any;
  eventDescField: any;
  eventDateField: any;
  eventFavField: any;
  setEvent: any;
  setEventForm: any;
  eventOutdated: any;
}

const EventForm = ({setEvent, setEventForm, isEventFormOpen, eventTitleField, eventDescField, eventDateField, eventFavField, eventOutdated}: Props) => {
  const [markColor, setColor] = useState('#000');
  const [isPickerOpen, setColorPicker] = useState(false);

  const handleColorChange = (color) => {
	setColor(color.hex);
  }

  const handlePickerClick = () => {
	setColorPicker(!isPickerOpen);
  }

  const handleAddEventClick = () => {
	const data: EventDataInterface = {
	  eventTitle: eventTitleField.value,
	  eventDescription: eventDescField.value,
	  eventDate: eventDateField.value,
	  eventFav: eventFavField.value,
	  eventColor: markColor,
	  // @ts-ignore
	  eventOutdated: CURRENT_DATE - Date.parse(new Date(eventDateField.value)) > 0
	}

	if (eventTitleField.value && eventDescField.value && eventDescField.value && eventDateField.value) {
	  setEvent(data);
	  setEventForm(false);

	  eventTitleField.value = '';
	  eventDescField.value = '';
	  eventDateField.value = '';
	  eventFavField.checked = false;
	}
  }

  const renderEventForm = () => {
	return <section className='eventForm'>
	  <div className="eventForm-wrapper">
		<CloseBtn styleClass={'btn-closeForm'}/>
		<div className="main-title">
		  <h2>Tell about your event</h2>
		</div>
		<div className="form-input">
		  <input type="text" name="name" ref={(input) => eventTitleField = input} className="question" id="even-title"
				 required autoComplete="off"/>
		  <label htmlFor="even-title">
			<span>Event title</span>
		  </label>
		</div>
		<div className="form-input">
		  <input type="text" name="name" ref={(input) => eventDescField = input} id='even-desc' className="question"
				 required autoComplete="off"/>
		  <label htmlFor="even-desc">
			<span>Event description</span>
		  </label>
		</div>
		<div className="input-group">
		  <div className="form-input">
			<label htmlFor="even-date">Date</label>
			<input ref={(input) => eventDateField = input} id='even-date' className='date-form' type="date"/>
		  </div>
		  <div className="form-input-colorpicker">
			<label htmlFor="even-color">Choose color</label>
			<button className='btn-change-color' style={{'background': markColor}} onClick={handlePickerClick}></button>
			{isPickerOpen && <TwitterPicker onChange={handleColorChange} color={markColor}/>}
		  </div>
		</div>
		<div className="form-favourites">
		  <input ref={(input) => eventFavField = input} className='btn-checkbox' id='even-favourite' type="checkbox"/>
		  <label htmlFor="even-favourite">Favourite</label>
		</div>
		<div className="add-event-wrapper">
		  <button onClick={handleAddEventClick} className="btn-setEvent">
			<div></div>
		  </button>
		</div>
	  </div>
	</section>
  }

  return (isEventFormOpen && renderEventForm())
}

const mapStateToProps = ({application}) => {
  return {
	isEventFormOpen: application.isEventFormOpen
  }
}

const mapDispatchToProps = {
  setEvent,
  setEventForm
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);