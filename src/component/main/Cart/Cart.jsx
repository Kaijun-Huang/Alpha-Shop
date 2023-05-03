import "./Cart.scss";
import { CartItems } from "component/Main/Cart/CartItems";
import Products from "component/Main/Cart/Products";
import TotalPrice from "component/Main/Cart/TotalPrice";

export default function Cart() {
  return (
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>

      <section className="product-list col col-12" data-total-price="0">
        {CartItems.map((item) => (
          <Products key={item.id} {...item} />
        ))}
      </section>

      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div className="price">$60</div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
        <div className="price">
          <TotalPrice />
        </div>
      </section>
    </section>
  );
}
