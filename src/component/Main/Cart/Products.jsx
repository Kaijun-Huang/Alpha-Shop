import { ReactComponent as Minus } from "assets/icons/minus.svg";
import { ReactComponent as Plus } from "assets/icons/plus.svg";

export default function Products({ id, name, img, price, quantity }) {
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
            <svg className="product-action minus">
              <Minus />
            </svg>
            <span className="product-count">{quantity}</span>
            <svg className="product-action plus">
              <Plus />
            </svg>
          </div>
        </div>
        <div className="price">${price}</div>
      </div>
    </div>
  );
}
