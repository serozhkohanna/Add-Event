import React from 'react';
import favIcon from './img/fav.svg';
import './Favourite.scss';

interface Props {
  styleClass: string;
}

const Favourite = ({styleClass}: Props) => {
  return <img className={styleClass || 'favourite'} src={favIcon} alt="star"/>
}

export default Favourite;