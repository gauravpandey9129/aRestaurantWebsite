import React, { useState } from 'react'
import classes from './CartForm.module.css'
import { useCart } from '../../context/CartContext'

export default function CartForm({elementPrice,elementId}) {
    const{total,cart,setCart,setTotal,setCartItems,cartItems}=useCart()

 const[x,setX]=useState(1)

  const addDish=(p)=>{
    setX(x+1)
    setTotal(total+p)
  }
  const removeDish=(p,id)=>{
    if(x>1){
    setX(x-1) 
    setTotal(total-p)
    }else if(x===1) {
     setCartItems(cartItems.filter((element)=>element.id!==id))
     setTotal(total-p)
     setCart(cart-1)
    }
  }

  return (
    <div>

        <input className={classes.input} readOnly value={x} ></input> 
         <button onClick={()=>addDish(elementPrice)} className={classes.buttonp} >+</button> 
         <button onClick={()=>removeDish(elementPrice,elementId)} className={classes.buttonm} >-</button><br/>

            
    </div>
  )
}
