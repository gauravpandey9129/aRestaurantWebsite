import React,{ useEffect, useState}  from 'react'
import classes from './HeaderButton.module.css'
import Cart from '../CartItems/Cart'

export default function HeaderButton() {
  const[cardVisible,setCardvisible]=useState(false)

 
  const makeCardVisible=()=>{
      setCardvisible((prev)=>!prev)
  }
   

  return (
    <>
    <button onClick={makeCardVisible} className={classes.button}>
     <span className={classes.cartText} >Your Cart</span>
     <span className={classes.cartCounter}>   3</span>
     {cardVisible && <Cart/>}
    </button>
    
    </>
  )
}
