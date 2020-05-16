import React, { useState } from 'react';
import AddEvent from "../../components/AddEvent/AddEvent";
import EventLayout from "../../components/EventsLayout/EventsLayout";
import EventsSorting from "../../components/EventsSorting/EventsSorting";

import { connect } from 'react-redux';

import './HomePage.scss';

const HomePage = ({events}) => {
  const [sorting, setSort] = useState(false);

  let currentEvent = events.filter(item => {
	if (!item.eventOutdated) {
	  return item;
	}
  })

  const handleSorting = () => {
	setSort(!sorting);
  }

  sorting && currentEvent.sort((a, b) => {
	return a.eventMs - b.eventMs;
  })

  return <main className='home-page'>
	<div className="home-page-addEvent">
	  <AddEvent/>
	</div>
	<EventLayout currentEvent={currentEvent}/>
	<EventsSorting setSort={handleSorting}/>
  </main>
}

const mapStateToProps = ({events}) => {
  return {
	events: events.events
  }
}

export default connect(mapStateToProps)(HomePage);