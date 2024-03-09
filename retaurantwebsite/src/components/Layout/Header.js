
import React, {Fragment}from 'react'
import food from '../../assets/food.jpg'
import classes from './Header.module.css';
import HeaderButton from './HeaderButton';
export default function Header(props) {
  return (
    <Fragment>
    <header className={classes.header}>
        <h1>ReactCafe! </h1>
        <HeaderButton/>
    </header>  
    <div className={classes['main-image']}>
    <img  src={food} alt='Foods on table'/>
    </div>
    </Fragment>
)
}


