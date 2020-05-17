import React from 'react';
import './EditEventForm.scss';
import '../EventForm/EventForm.scss';
import { connect } from 'react-redux';

import { setNewEventData, setEditEvent } from '../../actions/actions';

interface Props {
  item: any;
  editTitleField?: any;
  editDateField?: any;
  editDescField?: any;
  editFavField: any;
  setNewEventData: any;
  setEditEvent: any;
}

const EditEventForm = ({item, setNewEventData, setEditEvent}: Props, editTitleField, editFavField,
					   editDateField, editDescField,) => {
  const handleTitleChange = (e) => {
	item.eventTitle = e.target.value;
	setNewEventData(item);
  }

  const handleDescChange = (e) => {
	item.eventDescription = e.target.value;
	setNewEventData(item);
  }

  const handleDateChange = (e) => {
	item.eventDate = e.target.value;
	setNewEventData(item);
  }

  const handleFavChange = (e) => {
	item.eventFav = e.target.checked;
	setNewEventData(item);
  }

  const handleEditFormClick = () => {
	item.eventEdit = false;
	setEditEvent(item);
  }

  return <section className='event-edit-form'>
	<div className="subtitle">
	  <h4>Edit</h4>
	</div>
	<div className="form-input">
	  <input type="text" name="name" onChange={handleTitleChange} ref={(input) => editTitleField = input}
			 className="question" id="edit-title"
			 required autoComplete="off"/>
	  <label htmlFor="edit-title">
		<span>Edit name</span>
	  </label>
	</div>
	<div className="form-input">
	  <input type="text" name="name" onChange={handleDescChange} ref={(input) => editDescField = input}
			 className="question" id="edit-desc"
			 required autoComplete="off"/>
	  <label htmlFor="edit-desc">
		<span>Edit description</span>
	  </label>
	</div>
	<div className="form-input">
	  <label htmlFor="even-date">Edit date</label>
	  <input ref={(input) => editDateField = input} onChange={handleDateChange} id='even-date' className='date-form'
			 type="date"/>
	</div>
	<div className="form-input row">
	  <input ref={(input) => editFavField = input} onChange={handleFavChange} className='btn-checkbox'
			 id='even-favourite' type="checkbox"/>
	  <label htmlFor="even-favourite">Favourite</label>
	</div>
	<div className="form-close">
	  <a onClick={handleEditFormClick}>close</a>
	</div>
  </section>
}

const mapDispatchToProps = {
  setNewEventData,
  setEditEvent
}

export default connect(null, mapDispatchToProps)(EditEventForm);