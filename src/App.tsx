import React from 'react';
//@ts-ignore
import { Switch, withRouter, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import HomePage from "./Pages/HomePage/HomePage";
import OldPage from "./Pages/OldPage/OldPage";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import EventForm from './components/EventForm/EventForm';

function App() {
  return (
	<div className="App">
	  <Header/>
	  <Breadcrumbs/>
	  <EventForm/>
	  <Switch>
		<Route exact path='/addevent' component={HomePage}/>
		<Route exact path='/addevent/outdated' component={OldPage}/>
	  </Switch>
	</div>
  );
}

export default App;
