import React from 'react';
import AddEvent from "../../components/AddEvent/AddEvent";
import EventLayout from "../../components/EventsLayout/EventsLayout";

import { connect } from 'react-redux';

import './HomePage.scss';

const HomePage = ({events}) => {
  const currentEvent = events.filter(item => {
	if (!item.eventOutdated) {
	  return item;
	}
  })

  return <main className='home-page'>
	<div className="home-page-addEvent">
	  <AddEvent/>
	</div>
	<EventLayout currentEvent={currentEvent}/>
  </main>
}

const mapStateToProps = ({events}) => {
  return {
	events: events.events
  }
}

export default connect(mapStateToProps)(HomePage);