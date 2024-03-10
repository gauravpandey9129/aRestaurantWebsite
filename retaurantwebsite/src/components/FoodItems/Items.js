import { useState } from "react"
import React from 'react'
import classes from './Items.module.css'
import Form from "./Form"

export default function Items() {
    const [items,setItems]=useState([{
       id:Date.now(),
       Dish:'Sushi',
       Speciality: 'Finest fish and veggies',
       Price:22.99,
    },
    {
       id:Date.now(),
        Dish:'Schnitzel',
        Speciality: 'A german specialty!',
        Price:16.99,
     },
     {
       id:Date.now(),
         Dish:'Barbecue Burger',
         Speciality: 'American,raw,meaty',
         Price:12.99,
      },
      {
         id:Date.now(),
          Dish:'Green Bowl',
          Speciality: 'Healthy....and green...',
          Price:25.99,
       }])

        
  return (
    <div className={classes.bg} >
        {items.map((elements)=>(<div key={elements.Dish} >
        <h1 className={classes.margin2} >.{elements.Dish}</h1>
        <p className={classes.p}>{elements.Speciality}</p>
        <h1 className={classes.r} >  ${elements.Price } </h1> 
        
      <Form  dishPrice={elements.Price} /> <br/><div className={classes.line}>----------------------------</div>    </div>))}

    </div>
  )
}
