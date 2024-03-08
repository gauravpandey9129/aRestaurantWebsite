import React,{useState} from 'react'
import classes from './Form.module.css'

export default function Form() {
    const[count,setCount]=useState(0)
    const handleChangeAmount=(e)=>{
         setCount(e.target.value)
    }
  return (
    <form className={classes.form} >
    <label htmlFor='input'>Amount</label>
    <input type='number' value={count} onChange={handleChangeAmount} id='input' /><br/><br/>
    <button className={classes.button} type='button'> + Add</button>


    </form>
  )
}
