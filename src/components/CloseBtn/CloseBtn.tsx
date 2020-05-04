import React from 'react';
import './CloseBtn.scss';
import { connect } from 'react-redux';
import { setEventForm } from '../../actions/actions';

const CloseBtn = ({setEventForm}) => {
  const handleEventClose = () => {
	setEventForm(false);
  }

  return <button onClick={handleEventClose} className='btn-closeEvent'>close</button>
}

const mapDispatchToProps = {
  setEventForm
}

export default connect(null, mapDispatchToProps)(CloseBtn);