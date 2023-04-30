import { ReactComponent as Minus } from "../../material/icons/minus.svg";
import { ReactComponent as Plus } from "../../material/icons/plus.svg";
import Product1 from "../../material/images/product-1.jpg";
import Product2 from "../../material/images/product-2.jpg";

export function Cart() {
  return (
    <>
      <section className="cart-container col col-lg-5 col-sm-12">
        <h3 className="cart-title">購物籃</h3>

        <section className="product-list col col-12" data-total-price="0">
          <div
            className="product-container col col-12"
            data-count="0"
            data-price="3999"
          >
            <img className="img-container" src={Product1} />
            <div className="product-info">
              <div className="product-name">破壞補丁修身牛仔褲</div>
              <div className="product-control-container">
                <div className="product-control">
                  <svg className="product-action minus">
                    <Minus />
                    {/* <use xlink:href="#svg-icon-minus"></use> */}
                  </svg>
                  <span className="product-count"></span>
                  <svg className="product-action plus">
                    <Plus />
                    {/* <use xlink:href="#svg-icon-plus"></use> */}
                  </svg>
                </div>
              </div>
              <div className="price"></div>
            </div>
          </div>
          <div
            className="product-container col col-12"
            data-count="0"
            data-price="1299"
          >
            <img className="img-container" src={Product2} />
            <div className="product-info">
              <div className="product-name">刷色直筒牛仔褲</div>
              <div className="product-control-container">
                <div className="product-control">
                  <svg className="product-action minus">
                    <Minus />
                    {/* <use xlink:href="#svg-icon-minus"></use> */}
                  </svg>
                  <span className="product-count"></span>
                  <svg className="product-action plus">
                    <Plus />
                    {/* <use xlink:href="#svg-icon-plus"></use> */}
                  </svg>
                </div>
              </div>
              <div className="price"></div>
            </div>
          </div>
        </section>

        <section className="cart-info shipping col col-12">
          <div className="text">運費</div>
          <div className="price"></div>
        </section>
        <section className="cart-info total col col-12">
          <div className="text">小計</div>
          <div className="price"></div>
        </section>
      </section>
    </>
  );
}
