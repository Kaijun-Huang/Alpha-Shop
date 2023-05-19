import { useContext, useState } from "react";
import StepProgress from "component/Main/Steps/StepProgress";
import AddressPhase from "component/Main/Steps/Step1";
import ShippingPhase from "component/Main/Steps/Step2";
import CreditCardPhase from "component/Main/Steps/Step3";
import Cart from "component/Main/Cart/Cart";
import StepControl from "component/Main/Steps/StepControl";
import { CreditCardContext } from "./CreditCardContext";
import { CartContext } from "./Cart/CartContext";
import "./Form.scss";
import "./Register.scss";
import { BuyerInfoContext } from "./BuyerInfoContext";

export default function Main() {
  const [step, setStep] = useState(1);
  const [cardInfo, setCardInfo] = useState(useContext(CreditCardContext));
  const [cartItems, setCartItems] = useState(useContext(CartContext));
  const [buyerInfo, setBuyerInfo] = useState(useContext(BuyerInfoContext));
  const [shipping, setShipping] = useState("standard");
  const changeSteps = (e) => {
    if (e.target.className === "next" && step <= 3) {
      setStep(step + 1);
    } else if (e.target.className === "prev") {
      setStep(step - 1);
    }
  };

  const handleQuantityMinus = (e, id) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id && item.quantity > 0) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          return item;
        }
      })
    );
  };
  const handleQuantityPlus = (e, id) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      })
    );
  };
  const totalPrice = () => {
    let price = 0;
    cartItems.map((datum) => {
      price += datum.price * datum.quantity;
    });

    return price;
  };

  const handleCardChange = (e) => {
    // setCardInfo(() => {
    //   if (e.target.dataset.name === "cardOwner") {
    //     return { ...cardInfo, cardOwner: value };
    //   }
    //   if (e.target.dataset.name === "cardNum") {
    //     return { ...cardInfo, cardNum: value };
    //   }
    //   if (e.target.dataset.name === "expireDate") {
    //     return { ...cardInfo, expireDate: value };
    //   }
    //   if (e.target.dataset.name === "cvc") {
    //     return { ...cardInfo, cvc: value };
    //   }
    // });

    //to replace above
    setCardInfo(() => {
      for (let key in cardInfo) {
        if (e.target.dataset.name === key) {
          return { ...cardInfo, [key]: e.target.value };
        }
      }
    });
  };
  const handleCheck = (e) => {
    setShipping(() => {
      if (e.target.id !== shipping) {
        return "dhl";
      } else return;
    });
  };

  const handleBuyerInfoChange = (e) => {
    setBuyerInfo(() => {
      for (let key in buyerInfo) {
        if (e.target.dataset.name === key) {
          return { ...buyerInfo, [key]: e.target.value };
        }
      }
    });
  };

  const handleFinalConfirm = () => {
    function salutationChange() {
      if (buyerInfo.salutation === "ms") {
        return "女士";
      } else if (buyerInfo.salutation === "mx") {
        return "";
      } else return "先生";
    }
    let finalInfo = `
      姓名: ${buyerInfo.name}${salutationChange()}
      電話: ${buyerInfo.mobile}
      Email: ${buyerInfo.Email}
      縣市: ${buyerInfo.city}
      地址: ${buyerInfo.address}
      運送方式: ${shipping === "standard" ? "標準運送" : "DHL貨運"}
      持卡人姓名: ${cardInfo.cardOwner}
      卡號: ${cardInfo.cardNum}
      有效期限: ${cardInfo.expireDate}
      背面末三碼: ${cardInfo.cvc}

      -----總金額: ${totalPrice()}-----
      
    `;
    console.log(finalInfo);
    alert(finalInfo);
  };

  return (
    <main className="site-main">
      <CartContext.Provider value={cartItems}>
        <div className="main-container">
          <section
            className="register-container col col-lg-6 col-sm-12"
            data-phase={step}
            data-total-price="0"
          >
            <StepProgress />
            <section className="form-container col col-12">
              <AddressPhase onBuyerInfoChange={handleBuyerInfoChange} />
              <ShippingPhase onCheck={handleCheck} />
              <CreditCardPhase onCardChange={handleCardChange} />
            </section>
          </section>
          <Cart
            onQuantityMinus={handleQuantityMinus}
            onQuantityPlus={handleQuantityPlus}
            totalPrice={totalPrice}
          />

          <StepControl
            changeSteps={changeSteps}
            onFinalConfirm={handleFinalConfirm}
          />
        </div>
      </CartContext.Provider>
    </main>
  );
}
