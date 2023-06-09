import { ReactComponent as RightArrow } from "assets/icons/right-arrow.svg";
import { ReactComponent as LeftArrow } from "assets/icons/left-arrow.svg";

export default function StepControl({ changeSteps, onFinalConfirm }) {
  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
      <section className="button-group col col-12" data-phase="address">
        <button className="next" onClick={changeSteps}>
          下一步
          <RightArrow className="cursor-point" />
        </button>
      </section>
      <section className="button-group col col-12" data-phase="shipping">
        <button className="prev" onClick={changeSteps}>
          <LeftArrow className="cursor-point" />
          上一步
        </button>
        <button className="next" onClick={changeSteps}>
          下一步
          <RightArrow className="cursor-point" />
        </button>
      </section>
      <section className="button-group col col-12" data-phase="credit-card">
        <button className="prev" onClick={changeSteps}>
          <LeftArrow className="cursor-point" />
          上一步
        </button>
        <button className="next" onClick={onFinalConfirm}>
          確認下單
        </button>
      </section>
    </section>
  );
}
