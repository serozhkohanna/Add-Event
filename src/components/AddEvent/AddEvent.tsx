import React, { Fragment } from 'react';
import './AddEvent.scss';
import { connect } from 'react-redux';
import { setEventForm } from '../../actions/actions';

const AddEvent = (props) => {
  const handleClick = (): void => {
	const {setEventForm} = props;
	setEventForm(true);
  }

  return <Fragment>
	<button onClick={handleClick} className='btn-addEvent'>Add</button>
  </Fragment>
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