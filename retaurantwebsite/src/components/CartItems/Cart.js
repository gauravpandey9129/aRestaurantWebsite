import React, {useState} from 'react'
import  ReactDOM  from 'react-dom'
import classes from './cart.module.css'

export default function Cart(props) {
   const[cartItems,setCartItems]=useState([{ Dish:'sushi',}])
  return ReactDOM.createPortal(
    <>
      <div className={classes.div} ></div>

        
        <div className={classes.items} >
        <button className={classes.closeButton} >X</button>
        <h2><u>Your Cart ! </u></h2>
        
            <ul >
            <li className={classes.li} >{cartItems.map((elements)=>(elements.Dish))}</li>
            </ul>

            <div className={classes.ad} >
                <span className={classes.total} >Total Amount</span>
                <span className={classes.amount} > $35</span> 
            </div>

              <div className={classes.btndiv} >
                 
                
                 
                <button className={classes.orderButton} >Order</button>
              </div>
            
        </div>
    </>,
    document.querySelector(".myModal")
  )
}
