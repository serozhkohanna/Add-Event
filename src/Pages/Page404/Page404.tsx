import React from 'react';
import './Page404.scss';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return <section className='page-404'>
	<h3 className='page-404-title'>This page has gone missing.</h3>
	<Link to='/addevent' className='page-404-button'>Go home</Link>
  </section>
}

export default Page404;