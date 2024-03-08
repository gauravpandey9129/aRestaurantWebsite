import React from 'react'
import classes from './HeaderButton.module.css'

export default function HeaderButton() {
  return (
    <button className={classes.button}>
     <span className={classes.cartText} >Your Cart</span>
     <span className={classes.cartCounter}>   3</span>
    </button>
  )
}
