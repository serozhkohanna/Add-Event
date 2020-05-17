import React from 'react';
import EventLayout from "../../components/EventsLayout/EventsLayout";
import EmptyContent from "../../components/EmptyContent/EmptyContent";

import { connect } from 'react-redux';

const OldPage = ({events}) => {
  const outdatedEvent = events.filter(item => {
	if (item.eventOutdated) {
	  return item;
	}
  })

  const renderContent = () => {
	if (outdatedEvent.length === 0) {
	  return <EmptyContent type={'outdated'}/>
	} else {
	  return <EventLayout currentEvent={outdatedEvent}/>
	}
  }

  return <main>
	{renderContent()}
  </main>
}

const mapStateToProps = ({events}) => {
  return {
	events: events.events
  }
}

export default connect(mapStateToProps)(OldPage);