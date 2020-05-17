import React from 'react';
import './EmptyContent.scss';

interface Props {
  type: string;
}

const EmptyContent = ({type}: Props) => {
  return <section className='empty-content'>
	<h2>You have 0 <a>{type}</a> events</h2>
  </section>
}

export default EmptyContent;