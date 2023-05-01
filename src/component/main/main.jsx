import { StepProgress } from "../Steps/StepProgress";
import { AddressPhase } from "../Steps/Step1";
import { ShippingPhase } from "../Steps/Step2";
import { CreditCardPhase } from "../Steps/Step3";
import { StepControl } from "../Steps/StepControl";

export function Main() {
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
        </div>
        <StepControl />
      </main>
    </>
  );
}
