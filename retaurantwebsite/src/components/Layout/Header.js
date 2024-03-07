
import React from 'react'
import food from '../../assets/food.jpg'
export default function Header(props) {
  return (
    <div>
    <header>
        <h1>ReactCafe!</h1>

        <button>Cart</button>
    </header>  
    <div>
    <img src={food} alt='Foods on table'/>
    </div>

    </div>
  )
}
