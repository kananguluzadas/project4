// import React, { useContext, useEffect, useState } from "react";
// import { CartContext } from "./CartProducts";
// import ProductCard from "./ProductCard";

// const ShoppingCart = () => {


//   const { cart, totalPrice, setTotalPrice, setTotalQuantity, totalQuantity } = useContext(CartContext);
  

//   useEffect(() => {
//     const sumAllProducts = cart.map((item) => {
//       return item.quantity * item.price;
//     });
//     const sumPrice = sumAllProducts.reduce(
//       (prev, current) => prev + current,
//       0
//     );
//     const allQuantity = cart.map((item) => {
//       return item.quantity;
//     });
//     const sumQuantity = allQuantity.reduce(
//       (prev, current) => prev + current,
//       0
//     );

//     setTotalPrice(sumPrice);
//     setTotalQuantity(sumQuantity);
//   }, [cart]);

    
//   if (cart.length == 0) {
//     return <h2>Sizin sebetiniz bosdur</h2>;
//   }
//   return (
//     <div>
//       {cart.map((item) => {
//         return (
//           <ProductCard
//             key={item.id}
//             id={item.id}
//             productName={item.productName}
//             imageUrl={item.imageUrl}
//             price={item.price}
//             showDeleteButton={true}
//             showAddButton={false}
//             quantity={item.quantity}
//             increaseButton = {true}
//             decreaseButton = {true}
//           />
//         );
//       })}
//       <div>
//         <span>
//             {totalPrice}, {totalQuantity}
//         </span>
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;


import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartProducts";
// import "../styles/cart.css";


const ShoppingCart = () => {
  const [price, setPrice] = useState(0);
  const { cart, setCart, handleChange } = useContext(CartContext)
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img className="w-200 m-auto" src={item.image} alt="" />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button className="block m-auto" onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total flex flex-col">
        <span>Total Price of your Cart</span>
        <span>$ {price}</span>
      </div>
    </article>
  );
};

export default ShoppingCart;
