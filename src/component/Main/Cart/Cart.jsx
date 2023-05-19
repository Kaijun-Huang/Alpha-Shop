import { useContext } from "react";
import "./Cart.scss";
import Products from "./Products";
// import { useState, useContext } from "react";
import { CartContext } from "./CartContext";
export default function Cart({ onQuantityPlus, onQuantityMinus, totalPrice }) {
  // const [cartItems, setCartItems] = useState(useContext(CartItems));

  // function quantityPlus(id) {
  //   setCartItems(
  //     cartItems.map((item) => {
  //       if (item.id === id) {
  //         return {
  //           ...item,
  //           quantity: item.quantity + 1,
  //         };
  //       } else {
  //         return item;
  //       }
  //     })
  //   );
  // }
  // function quantityMinus(id) {
  //   setCartItems(
  //     cartItems.map((item) => {
  //       if (item.id === id && item.quantity > 0) {
  //         return {
  //           ...item,
  //           quantity: item.quantity - 1,
  //         };
  //       } else {
  //         return item;
  //       }
  //     })
  //   );
  // }

  // function totalPrice() {
  //   let price = 0;
  //   cartItems.map((datum) => {
  //     price += datum.price * datum.quantity;
  //   });

  //   return price;
  // }

  const cartData = useContext(CartContext);
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12" data-total-price="0">
        {cartData.map((item) => (
          <Products
            key={item.id}
            {...item}
            onQuantityPlus={onQuantityPlus}
            onQuantityMinus={onQuantityMinus}
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
