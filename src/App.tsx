import React from 'react';
//@ts-ignore
import { Switch, withRouter, Route } from 'react-router-dom';
import './App.scss';

import Header from './components/Header/Header';
import HomePage from "./Pages/HomePage/HomePage";
import OldPage from "./Pages/OldPage/OldPage";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";

function App() {
  return (
	<div className="App">
	  <Header/>
	  <Breadcrumbs/>
	  <Switch>
		<Route exact path='/' component={HomePage}/>
		<Route exact path='/outdated' component={OldPage}/>
	  </Switch>
	</div>
  );
}

export default App;
