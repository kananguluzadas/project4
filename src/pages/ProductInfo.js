import React, { useContext, useState } from 'react';
import { tabelementss } from '../components/MyLinks';
import { useParams } from 'react-router-dom';
import { data } from '../components/MyLinks';
import { CartContext } from '../components/CartProducts';

const ProductInfo = () => {
  const { ids } = useParams();
  const productId = parseInt(ids);
  const product = data.find((product) => product.id === productId);

  const [activeImgIndex, setActiveImgIndex] = useState(0); // Initialize with the first image index
  const [quantity, setQuantity] = useState(1); // Initialize quantity with 1
  const [cart, setCart] = useState([]); // Initialize an empty cart array

  const {addToCart, setTotalPrice} = useContext(CartContext)

  const handleImageClick = (index) => {
    setActiveImgIndex(index);
  };

  const handleIncrementQuantity = (currentPrice) => {
    setQuantity(quantity + 1);
    setTotalPrice(prev => prev + currentPrice)

  };

  const handleDecrementQuantity = (currentPrice) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setTotalPrice(prev => prev - currentPrice)

    }
  };

  const handleAddToCart = () => {
    // Create a copy of the cart array and add the selected product with its quantity
    addToCart(product);
    // You can also implement logic to save the cart in local storage or send it to a server.
  };

  return (
    <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
      <div className='flex md:flex-row flex-col-reverse gap-6 lg:w-2/4'>
        <div className='flex flex-row md:flex-col justify-between h-24'>
          {product.ss.map((image, index) => (
            <img
              key={index}
              src={image}
              alt=""
              className={`w-24 h-24 cursor-pointer ${
                index === activeImgIndex ? 'border-2 border-blue-500' : ''
              }`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        <img
          src={product.ss[activeImgIndex]}
          alt=""
          className='w-full h-full aspect-square object-cover'
        />
      </div>
      <div className='flex flex-col gap-6'>
        <div className='text-left flex flex-col gap-2'>
          <img className='w-[60px] h-[60px]' src={product.logoImage} alt='ss' />
          <p className='text-3xl font-semibold'>{product.name}</p>
          <span className='border-2 py-1 px-2 max-w-[76px] text-orange'>{product.gender}</span>
        </div>

        <div className='text-left'>
          <span>Ölçü</span>
          <div className='flex flex-wrap gap-2'>
            {product.sizes &&
              product.sizes.map((size, index) => (
                <span key={index} className='border-2 py-1.5 px-2.5'>
                  {size}
                </span>
              ))}
          </div>
        </div>

        <div className='flex items-center'>
          <div>
            <img src={product.birkart} alt='img' />
          </div>
          <span>6 ay {product.price / 6} ₼</span>
        </div>

        <div className='text-left text-3xl font-bold'>
          <span>{product.price} ₼</span>
        </div>

        <div className='flex items-center'>
          <button onClick={handleDecrementQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrementQuantity}>+</button>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;