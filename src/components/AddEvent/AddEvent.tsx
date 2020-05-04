import React, { Fragment } from 'react';
import './AddEvent.scss';
import { connect } from 'react-redux';
import { setEventForm } from '../../actions/actions';

const AddEvent = (props) => {
  const handleClick = (): void => {
	const {setEventForm} = props;
	setEventForm(true);
  }

  return <button onClick={handleClick} className='btn-addEvent'>Add</button>
}

const mapStateToProps = ({application}) => {
  return {
	isEventFormOpen: application.isEventFormOpen
  }
}

const mapDispatchToProps = {
  setEventForm
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEvent);