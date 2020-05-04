import React from 'react';
import EventLayout from "../../components/EventsLayout/EventsLayout";
import { connect } from 'react-redux';

const OldPage = ({events}) => {
  const outdatedEvent = events.filter(item => {
	if (item.eventOutdated) {
	  return item;
	}
  })

  return <main>
	<EventLayout currentEvent={outdatedEvent}/>
  </main>
}

const mapStateToProps = ({events}) => {
  return {
	events: events.events
  }
}

export default connect(mapStateToProps)(OldPage);