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


// import React, { useState, useEffect, useContext } from "react";
// import { CartContext } from "./CartProducts";
// import "../styles/cart.css";


// const ShoppingCart = () => {
//   const [price, setPrice] = useState(0);
//   const { cart, setCart, handleChange } = useContext(CartContext)
//   const handleRemove = (id) => {
//     const arr = cart.filter((item) => item.id !== id);
//     setCart(arr);
//   };

//   const handlePrice = () => {
//     let ans = 0;

    // Calculate the total price, ensuring item.amount and item.price are valid numbers
  //   cart.forEach((item) => {
  //     const amount = Number(item.amount); // Convert to a number
  //     const itemPrice = Number(item.price); // Convert to a number

  //     if (!isNaN(amount) && !isNaN(itemPrice)) {
  //       ans += amount * itemPrice;
  //     }
  //   });

  //   setPrice(ans);
  // };

//   
import React, { useContext, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import '../App.css'
import { CartContext } from "./CartProducts";
const ShoppingCart = () => {
  const { cart, totalPrice, setTotalPrice, totalQuantity, setTotalQuantity } = useContext(CartContext);
  useEffect(() => {
    const sumAllProducts = cart.map((item) => {
      return item.quantity * item.price;
    });
    const sumPrice = sumAllProducts.reduce(
      (prev, current) => prev + current,
      0
    );
    const allQuantity = cart.map((item) => {
      return item.quantity;
    });
    const sumQuantity = allQuantity.reduce(
      (prev, current) => prev + current,
      0
    );

    setTotalPrice(sumPrice);
    setTotalQuantity(sumQuantity);
  }, [cart]);
  return (
    <>
      <div className="home">
      {cart.length === 0 ? (
        <h1>You have no products</h1>
      ) : (
        cart.map((item) => {
          return (
            <ProductCard
              key={item.id}
              id={item.id}
              productName={item.productName}
              price={item.price}
              description={item.description}
              imageUrl={item.imageUrl}
              quantity={item.quantity}
              showAddButton={false}
              showDeleteButton={true}
              addQtyBtn={true}
              delQtyBtn={true}
            />
          );
        })
      )}
    </div>
    <p className="ttr">Cart {totalQuantity} Summary AZN{totalPrice}</p>
    </>
    
  );
};

export default ShoppingCart;
