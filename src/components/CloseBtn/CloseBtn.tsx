import React from 'react';
import './CloseBtn.scss';
import { connect } from 'react-redux';
import { setEventForm } from '../../actions/actions';

interface Props {
  setEventForm: any;
  styleClass: string;
  childResponse: any;
}

const CloseBtn = ({setEventForm, styleClass, childResponse}: Props) => {
  const handleEventClose = () => {
	setEventForm(false);
	childResponse(false);
  }

  return <button className={styleClass} onClick={handleEventClose}>
	<div></div>
  </button>
}

const mapDispatchToProps = {
  setEventForm
}

export default connect(null, mapDispatchToProps)(CloseBtn);