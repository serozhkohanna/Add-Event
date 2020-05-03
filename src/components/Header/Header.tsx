import React from 'react';
import './Header.scss';
import AddEvent from "../AddEvent/AddEvent";

const Header = () => {
  return <header>
	<div className="title-wrapper">
	  <h1>event</h1>
	</div>
	<AddEvent/>
  </header>
}

export default Header;