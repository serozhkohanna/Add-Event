import React, { Fragment } from 'react';
import RemoveEventBtn from "../RemoveEventBtn/RemoveEventBtn";
import EditEventBtn from '../EditEventBtn/EditEventBtn';

import './Event.scss';

import { EventDataInterface } from '../../constants/eventData.interface';

interface Props {
  eventsList: object[];
}

const Event = ({eventsList}: any | EventDataInterface) => {
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
		<button className='show-more'>show more</button>
		<div className="event-config">
		  <EditEventBtn/>
		  <RemoveEventBtn event={item}/>
		</div>
	  </div>
	})}
  </Fragment>
}

export default Event;