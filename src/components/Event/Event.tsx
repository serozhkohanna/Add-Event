import React, { Fragment } from 'react';
import './Event.scss';

import { EventDataInterface } from '../../constants/eventData.interface';

interface Props {
  eventsList: object[];
}

const Event = ({eventsList}: any | EventDataInterface) => {
  return <Fragment>
	{eventsList && eventsList.map((item, i) => {
	  return <div key={i}>
		<p>{item.eventTitle}</p>
		<p>{item.eventDescription}</p>
		<p>{item.eventDate}</p>
		<p>{item.eventFav}</p>
		<p>{item.eventColor}</p>
	  </div>
	})}
  </Fragment>
}

export default Event;