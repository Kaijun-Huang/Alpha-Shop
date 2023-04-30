import { StepProgress } from "../steps/stepProgress";
import { AddressPhase } from "../steps/step1";
import { ShippingPhase } from "../steps/step2";
import { CreditCardPhase } from "../steps/step3";
import { StepControl } from "../steps/stepControl";

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
