// import { ReactComponent as Minus } from "assets/icons/minus.svg";
// import { ReactComponent as Plus } from "assets/icons/plus.svg";

import Minus from "assets/icons/minus.svg";
import Plus from "assets/icons/plus.svg";

export default function Products({
  id,
  name,
  img,
  price,
  quantity,
  onQuantityMinus,
  onQuantityPlus,
}) {
  return (
    <div
      className="product-container col col-12"
      data-count={quantity}
      data-price={price}
    >
      <img className="img-container" src={img} alt={name} />
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <img
              src={Minus}
              alt="minus"
              className="product-action minus"
              onClick={(e) => onQuantityMinus(e, id)}
            />

            {/* <Minus
              className="product-action minus"
              onClick={() => onQuantityMinus(id)}
            /> */}
            <span className="product-count">{quantity}</span>
            <img
              src={Plus}
              alt="plus"
              className="product-action plus"
              onClick={(e) => onQuantityPlus(e, id)}
            />
            {/* 
            <Plus
              className="product-action plus"
              onClick={() => onQuantityPlus(id)}
            /> */}
          </div>
        </div>
        <div className="price">${price * quantity}</div>
      </div>
    </div>
  );
}
