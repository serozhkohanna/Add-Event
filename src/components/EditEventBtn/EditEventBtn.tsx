import React from 'react';
import './EditEventBtn.scss';
import '../Event/Event.scss';

interface Props {
  setEdit: any;
}

const EditEventBtn = ({setEdit}: Props) => {
  const handleEditClick = () => {
	setEdit();
  }

  return <button onClick={handleEditClick} className='event-config-edit'/>
}

export default EditEventBtn;