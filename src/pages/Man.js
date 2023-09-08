import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards';

const Man = () => {
  const [cart,setCart] = useState([])
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
    .get(`https://fakestoreapi.com/products`)
    .then((response) => {
      setData(response.data)
    })
    .catch((response) => {
      console.log("this is catch");
    })
  })

  const handleClick = (product) => {
    setCart([...cart, product])
    console.log(cart);
  }
  return (
    <div>
      <div className='px-10 grid xl:grid-cols-4 gap-80 items-center'>
        {data.map((product) => (
          <Cards key={product.id} product={product} handleClick={handleClick}/>
          
        ))}
      </div>
    </div>
  )
}

export default Man