import React from 'react'
import { ChevronDown, ChevronUp } from "../icons";

const cartItem = ({id, img, title,price,amount}) => {
  return (
    <article className='cart-item'>
        <img src={img} alt={title} />
    </article>
  )
}

export default cartItem