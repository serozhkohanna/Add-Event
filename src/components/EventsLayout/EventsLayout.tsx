import React from 'react';
import Event from "../Event/Event";
import './EventsLayout.scss'

interface Props {
  currentEvent: object;
}

const EventLayout = ({currentEvent}: Props) => {
  return <section className='event-layout'>
	<Event eventsList={currentEvent}/>
  </section>
}

export default EventLayout;