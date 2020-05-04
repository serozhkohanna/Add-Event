import React from 'react';
import { connect } from 'react-redux';
import Event from "../Event/Event";
import './EventsLayout.scss'

interface Props {
  eventsList: object[]
}

const EventLayout = ({eventsList}: Props) => {
  return <section className='event-layout'>
	<Event eventsList={eventsList} />
  </section>
}

const mapStateToProps = ({events}) => {
  return {
	eventsList: events.events
  }
}

export default connect(mapStateToProps)(EventLayout);