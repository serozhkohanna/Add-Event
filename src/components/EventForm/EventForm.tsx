import React, { useState } from 'react';
import { connect } from 'react-redux';
import './EventForm.scss';
import { setEvent, setEventForm } from "../../actions/actions";
import { EventDataInterface } from "../../constants/eventData.interface";
import { BlockPicker } from 'react-color';

interface Props {
  isEventFormOpen: boolean;
  eventTitleField: any;
  eventDescField: any;
  eventDateField: any;
  eventFavField: any;
  setEvent: any;
}

const EventForm = ({setEvent, isEventFormOpen, eventTitleField, eventDescField, eventDateField, eventFavField}: Props) => {
  const [markColor, setColor] = useState('#000');

  const handleColorChange = (color) => {
	setColor(color.hex);
  }

  const handleAddEventClick = () => {
	const data: EventDataInterface = {
	  eventTitle: eventTitleField.value,
	  eventDescription: eventDescField.value,
	  eventDate: eventDateField.value,
	  eventFav: eventFavField.value,
	  eventColor: markColor
	}

	if (eventTitleField.value && eventDescField.value && eventDescField.value && eventDateField.value) {
	  setEvent(data);

	  eventTitleField.value = '';
	  eventDescField.value = '';
	  eventDateField.value = '';
	  eventFavField.checked = false;
	}
  }

  const renderEventForm = () => {
	return <section className='eventForm'>
	  <div className="form-input">
		<label htmlFor="even-title">title</label>
		<input required ref={(input) => eventTitleField = input} id='even-title' type="text"/>
	  </div>
	  <div className="form-input">
		<label htmlFor="even-desc">Description</label>
		<input ref={(input) => eventDescField = input} id='even-desc' type="text"/>
	  </div>
	  <div className="form-input">
		<label htmlFor="even-date">Date</label>
		<input ref={(input) => eventDateField = input} id='even-date' type="date"/>
	  </div>
	  <div className="form-favourites">
		<label htmlFor="even-favourite">Favourite</label>
		<input ref={(input) => eventFavField = input} id='even-favourite' type="checkbox"/>
	  </div>
	  <div className="form-favourites">
		<label htmlFor="even-color">choose color</label>
		<BlockPicker onChange={handleColorChange} color={markColor}/>
	  </div>
	  <button onClick={handleAddEventClick} className="btn-setEvent">
		Add event
	  </button>
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
  setEvent
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);