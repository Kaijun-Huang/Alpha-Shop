import StepProgress from "component/Main/Steps/StepProgress";
import AddressPhase from "component/Main/Steps/Step1";
import ShippingPhase from "component/Main/Steps/Step2";
import CreditCardPhase from "component/Main/Steps/Step3";
import Cart from "component/Main/Cart/Cart";
import StepControl from "component/Main/Steps/StepControl";
import "./Form.scss";
import "./Register.scss";
import { useState } from "react";

export default function Main() {
  const [step, setStep] = useState(1);

  function changeSteps(e) {
    if (e.target.className === "next" && step <= 3) {
      setStep(step + 1);
    } else if (e.target.className === "prev") {
      setStep(step - 1);
    }
  }

  return (
    <main className="site-main">
      <div className="main-container">
        {/* <!-- register --> */}
        <section
          className="register-container col col-lg-6 col-sm-12"
          data-phase={step}
          data-total-price="0"
        >
          <StepProgress />
          {/* <!-- register-form --> */}
          <section className="form-container col col-12">
            <AddressPhase />
            <ShippingPhase />
            <CreditCardPhase />
          </section>
        </section>
        <Cart />
        <StepControl changeSteps={changeSteps} />
      </div>
    </main>
  );
}
