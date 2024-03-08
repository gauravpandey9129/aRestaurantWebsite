import { useState } from "react"
import React from 'react'
import classes from './Items.module.css'

export default function Items() {
    const [items,setItems]=useState([{
       Dish:'Sushi',
       Speciality: 'Finest fish and veggies',
       Price:22.99,
    },
    {
        Dish:'Schnitzel',
        Speciality: 'A german specialty!',
        Price:16.99,
     },
     {
         Dish:'Barbecue Burger',
         Speciality: 'American,raw,meaty',
         Price:12.99,
      },
      {
          Dish:'Green Bowl',
          Speciality: 'Healthy....and green...',
          Price:25.99,
       }])
  return (
    <div className={classes.bg} >
        {items.map((elements)=>(<div className={classes.dish} key={elements.Dish} >
        <h1 className={classes.margin2} >.{elements.Dish}</h1>
        <p className={classes.p}>{elements.Speciality}</p>
        <h1 className={classes.r} > ${elements.Price }</h1> 
        </div>))}

    </div>
  )
}
