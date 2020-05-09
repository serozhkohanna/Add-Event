import React from 'react';
import './RemoveEventBtn.scss';
import '../Event/Event.scss'
import { connect } from 'react-redux';
import { removeEvent } from '../../actions/actions';

interface Props {
  event: object;
  events: object[];
  removeEvent: any;
}

const RemoveEventBtn = ({event, events, removeEvent}: Props) => {

  const handleRemoveClick = () => {
	removeEvent(event);
  }

  return <button onClick={handleRemoveClick} className='event-config-remove'/>
}

const mapStateToProps = ({events}) => {
  return {
	events: events.events
  }
}

const mapDispatchToProps = {
  removeEvent
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveEventBtn);