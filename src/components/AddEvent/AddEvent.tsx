import React, { useState } from 'react';
import './AddEvent.scss';
import EventForm from '../EventForm/EventForm';
import { connect } from 'react-redux';
import { setEventForm } from '../../actions/actions';

const AddEvent = (props) => {
  const handleClick = (): void => {
	const {setEventForm, isEventFormOpen} = props;
	setEventForm(!isEventFormOpen);
  }

  return <section>
	<button onClick={handleClick} className='btn-addEvent'>Add</button>
	<EventForm openState={props.isEventFormOpen} />
  </section>
}

const mapStateToProps = ({application}) => {
  return {
	isEventFormOpen: application.isEventFormOpen
  }
}

const mapDispatchToProps = {
  //@ts-ignore
  setEventForm
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);