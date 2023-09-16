import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
const Man = () => {
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

  return (
    <div className="grid gap-8 p-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center">
      {data.map((item) => {
      const limitedDes = item.description.slice(0,20) + (item.description.length > 20 ? "..." : "")
        return (
        <div className=''>
          <ProductCard
            key={item.id}
            id={item.id}
            productName={item.title}
            price={item.price}
            // description={limitedDes}
            imageUrl={item.image}
            quantity={item.quantity}
          />
        </div>
            
            
          
          
          
        );
      })}
    </div>
  )
}

export default Man