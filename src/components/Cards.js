import React, { useContext } from 'react'
import { CartContext } from './CartProducts'

const Cards = ({product}) => {

  const { handleClick} = useContext(CartContext)
  const {id, title, price, image } = product
  return (

    <div>
      <div key={id} className=''>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>Price: ${price}</p>
            <button onClick ={() => handleClick(product)}>Add to card</button>
          </div>
    </div>
  )
}

export default Cards