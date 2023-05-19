import { useContext } from "react";
import "./Cart.scss";
import Products from "./Products";
// import { useState, useContext } from "react";
import { CartContext } from "./CartContext";
export default function Cart({ onQuantityPlus, onQuantityMinus, totalPrice }) {
  const cartData = useContext(CartContext);
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12" data-total-price="0">
        {cartData.map((item) => (
          <Products
            key={item.id}
            {...item}
            onQuantityMinus={onQuantityMinus}
            onQuantityPlus={onQuantityPlus}
          />
        ))}
      </section>

      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">免費</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">${totalPrice()}</div>
      </section>
    </section>
  );
}
