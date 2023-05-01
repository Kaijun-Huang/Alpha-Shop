import StepProgress from "component/Main/Steps/StepProgress";
import AddressPhase from "component/Main/Steps/Step1";
import ShippingPhase from "component/Main/Steps/Step2";
import CreditCardPhase from "component/Main/Steps/Step3";
import Cart from "component/Main/Cart/Cart";
import StepControl from "component/Main/Steps/StepControl";
import "./form.scss";
import "./register.scss";
import "component/base.scss";
import "component/reset.scss";

export default function Main() {
  return (
    <>
      {/* main */}
      <main className="site-main">
        <div className="main-container">
          {/* <!-- register --> */}
          <section
            className="register-container col col-lg-6 col-sm-12"
            data-phase="1"
            data-total-price="0"
          >
            <StepProgress />
            {/* <!-- register-form --> */}
            <section className="form-container col col-12">
              <AddressPhase />
              {/* <ShippingPhase /> */}
              {/* <CreditCardPhase /> */}
            </section>
          </section>
          <Cart />
          <StepControl />
        </div>
      </main>
    </>
  );
}
