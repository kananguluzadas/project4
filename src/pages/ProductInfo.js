import React from 'react'
import { tabelementss } from '../components/MyLinks'
import { useParams } from 'react-router-dom'
import { data } from '../components/MyLinks'


const ProductInfo = () => {


const {ids} = useParams()


const productId = parseInt(ids);
const product = data.find((product) => product.id === productId);




  return (
    <div>
      <h4>{product.name}</h4>

      
    </div>
  )
}

export default ProductInfo