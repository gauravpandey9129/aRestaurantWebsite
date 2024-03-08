import React from 'react'
import classes from './Summary.module.css'

export default function Summary() {
  return (
    <div>
        <card className={classes.summary}>
            <h1>Delicious Food,Delivered To You</h1>
            <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunchor dinner at home</p><br></br>
            <p>All our meals are cooked with high quality ingridients,just-in-time and of course by experienced chefs!</p>
        </card>
    </div>
  )
}
