import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from '../components/Cards';
import ProductCard from '../components/ProductCard';
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
  return (
    <div className="home">
      {data.map((item) => {
        return (
          <ProductCard
            key={item.id}
            id={item.id}
            productName={item.title}
            price={item.price}
            description={item.description}
            imageUrl={item.image}
            quantity={item.quantity}
          />
        );
      })}
    </div>
  )
}

export default Man