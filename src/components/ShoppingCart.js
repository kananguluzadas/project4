
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
