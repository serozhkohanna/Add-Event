import React, { Fragment } from 'react';
import RemoveEventBtn from "../RemoveEventBtn/RemoveEventBtn";
import EditEventBtn from '../EditEventBtn/EditEventBtn';
import { connect } from 'react-redux';

import { expandEvent, setEditEvent } from '../../actions/actions';

import Favourite from '../Favourite/Favourite';
import EditEventForm from '../EditEventForm/EditEventForm';

import './Event.scss';

import { EventDataInterface } from '../../constants/eventData.interface';

interface Props {
  eventsList: object[];
  expandEvent: any;
  setEditEvent: any;
}

const Event = ({eventsList, expandEvent, setEditEvent}: any | EventDataInterface) => {
  const handleExpandClick = (item) => {
	item.eventExpand = !item.eventExpand;
	expandEvent(item);
  }

  const renderExpandSection = (item) => {
	return <div className="event-expand">
	  <div className="expand-date">
		<p>{item.eventDate}</p>
	  </div>
	  <div className="expand-desc">
		<p>{item.eventDescription}</p>
	  </div>
	  {item.eventFav && <Favourite styleClass={'event-favourite'}/>}
	</div>
  }

  const handleEditResponse = (item) => {
	item.eventEdit = !item.eventEdit;
	setEditEvent(item);
  }

  return <Fragment>
	{eventsList && eventsList.map((item, i) => {
	  return <div key={i} className='event'>
		<div className="dot-wrapper">
		  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
			<circle cx="7.5" cy="7.5" r="7" fill={item.eventColor} fillOpacity="0.5" stroke='none'/>
		  </svg>
		</div>
		<p className='event-title'>
		  {item.eventTitle}
		</p>
		<p className="event-from">{item.eventDateFrom}</p>
		<button onClick={() => handleExpandClick(item)} className='show-more'>show more</button>
		{item.eventExpand && renderExpandSection(item)}
		<div className="event-config">
		  <EditEventBtn setEdit={() => handleEditResponse(item)}/>
		  <RemoveEventBtn event={item}/>
		</div>
		{item.eventEdit && <EditEventForm item={item}/>}
	  </div>
	})}
  </Fragment>
}

const mapDispatchToProps = {
  expandEvent,
  setEditEvent
}

export default connect(null, mapDispatchToProps)(Event);