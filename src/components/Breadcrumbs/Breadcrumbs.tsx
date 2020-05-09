import React from 'react';
import './Breadcrumbs.scss';
//@ts-ignore;
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
  return <section className={'breadcrumbs'}>
	<Link to='/addevent' className={'breadcrumbs-item'}>Home</Link>
	<Link to='/outdated' className={'breadcrumbs-item'}>Old</Link>
  </section>
}

export default Breadcrumbs;
