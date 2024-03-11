import React, {useEffect, useState } from 'react'
import  ReactDOM  from 'react-dom'
import classes from './cart.module.css'
import { useCart } from '../../context/CartContext'
import CartForm from './CartForm'

export default function Cart({makeCardVisible}) {

  const{total,cartItems}=useCart()

  
   
    

   
  return ReactDOM.createPortal(
    <>
    
      <div className={classes.div} ></div>

        <div className={classes.items} >
           <button  onClick={ makeCardVisible}  className={classes.closeButton} >X</button>

            <h2 className={classes.h} ><u>Your Cart ! </u></h2>

            {cartItems.map((elements)=>
             (<li className={classes.li} key={elements.id} > 
                
              {elements.Dish} <br/>
              <div className={classes.lip}> 
              ${elements.Price}
              <CartForm elementPrice={elements.Price}  elementId={elements.id} />
              </div>
            <br/>---------  </li>))}
                 

              <div className={classes.ad} >
                <span className={classes.total} >Total Amount</span>
                <span className={classes.amount} > $  {total.toFixed(2)} </span> 
              </div>

              <div className={classes.btndiv} >
                <button className={classes.orderButton} >Order</button>
              </div>
        </div>
    </>,
    document.querySelector(".myModal")
    )
  }
            
