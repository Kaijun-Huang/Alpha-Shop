import { ReactComponent as Minus } from "assets/icons/minus.svg";
import { ReactComponent as Plus } from "assets/icons/plus.svg";
import { useState } from "react";

export default function Products({
  name,
  img,
  price,
  subTotalPlus,
  subTotalMinus,
}) {
  const [amount, setAmount] = useState(0);
  function quantityMinus() {
    if (amount > 0) {
      setAmount(amount - 1);
      subTotalMinus(price);
    }
  }
  function quantityPlus() {
    setAmount(amount + 1);
    subTotalPlus(price);
  }

  return (
    <div
      className="product-container col col-12"
      data-count={amount}
      data-price={price}
    >
      <img className="img-container" src={img} alt={name} />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <Minus className="product-action minus" onClick={quantityMinus} />
            <span className="product-count">{amount}</span>
            <Plus className="product-action plus" onClick={quantityPlus} />
          </div>
        </div>
        <div className="price">${price * amount}</div>
      </div>
    </div>
  );
}
