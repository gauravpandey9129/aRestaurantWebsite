import React,{useState} from 'react'
import classes from './Form.module.css'
import { useCart } from '../../context/CartContext'

export default function Form({dishPrice}) {
    const{cart,setCart,total,setTotal}=useCart()

    const[count,setCount]=useState(0)
    
    

    const HandleOnClick=(e)=>{
      setCart(cart+1)
      e.preventDefault()
       setCount(count+1)
       setTotal(total+dishPrice)
    }

    const HandleOnMinus=(e)=>{
      setCart(cart-1)
      e.preventDefault()
       setCount(count-1)
       setTotal(total-dishPrice)
    }


    


  return (
    <form className={classes.form} >
    <label className={classes.amount} htmlFor='input'>Amount:- </label>
    <input className={classes.input} type='number' value={count} readOnly id='input' /><br/><br/>
    <button onClick={HandleOnClick} className={classes.button1} type='button'> + </button>
    <button onClick={HandleOnMinus} className={classes.button2} type='button'> - </button>

    </form>
  )
}
