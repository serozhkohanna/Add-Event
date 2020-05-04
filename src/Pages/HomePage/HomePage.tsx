import React from 'react';
import AddEvent from "../../components/AddEvent/AddEvent";
import EventForm from "../../components/EventForm/EventForm";
import EventLayout from "../../components/EventsLayout/EventsLayout";

import './HomePage.scss';

const HomePage = () => {
  return <main className='home-page'>
	<AddEvent/>
	<EventForm/>
	<EventLayout/>
  </main>
}

export default HomePage;