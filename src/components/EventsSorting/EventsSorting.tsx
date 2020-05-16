import React, { useState } from 'react';
import './EventSorting.scss';

interface Props {
  setSort: any;
}

const EventsSorting = ({setSort}: Props) => {
  const [isActive, setActiveClass] = useState(false);
  const handleSortClick = () => {
	setSort();
	setActiveClass(!isActive);
  }

  return <button onClick={handleSortClick} className={isActive ? 'events-sort-active' : 'events-sort'}>
	Sort
  </button>
}

export default EventsSorting;