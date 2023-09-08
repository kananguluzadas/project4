import React, { useContext, useState } from "react";
import { CartContext } from "./CartProducts";

const ProductCard = ({
  id,
  productName,
  imageUrl,
  price,
  showDeleteButton = false,
  showAddButton = true,
  quantity,
  increaseButton = false,
  decreaseButton = false
}) => {


  const { addToCart, deleteFromCart, setTotalPrice, setTotalQuantity, totalQuantity} = useContext(CartContext);

  const [qty, setQty] = useState(quantity || 1)

  const handleAddQty = (currentPrice, currentQuantity) => {
    setQty(prevQty => prevQty + 1);
    setTotalPrice(prev => prev + currentPrice);
    
  };

  const handleDelQty = (currentPrice, currentQuantity) => {
    if (qty === 1) {
      alert("Mehsul sayi 1 den asagi olmaz");
    } else {
      setQty(prevQty => prevQty - 1);
      setTotalPrice(prev => prev - currentPrice);
     
    }
  };

  return (
    <div className="flex flex-col justify-center align-middle">
      <div className="m-auto">
        <img src={imageUrl} alt="img"></img>
      </div>
      <div>
        <p>{productName}</p>
        <span>{price}</span>
        {quantity && qty && <p>Quantity: {totalQuantity}</p>}
      </div>

      {showAddButton && (
        <button onClick={() => addToCart(id, price, productName, imageUrl, quantity)}>
          Add to cart
        </button>
      )}
      {showDeleteButton && (
        <button onClick={() => deleteFromCart(id)}>Delete from cart</button>
      )}
      {increaseButton && <button onClick={() => handleAddQty(price)}>+</button>}
      {decreaseButton && <button onClick={() => handleDelQty(price)}>-</button>}
    </div>
  );
};

export default ProductCard;
