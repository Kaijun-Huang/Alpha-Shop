export default function CreditCardPhase({ onCardChange }) {
  return (
    <form className="col col-12" data-phase="credit-card">
      <h3 className="form-title">付款資訊</h3>
      <section className="form-body col col-12">
        <div className="col col-12">
          <div className="input-group input-w-lg-4 input-w-sm-full">
            <div className="input-label">持卡人姓名</div>
            <input
              data-name="cardOwner"
              type="text"
              placeholder="John Doe"
              onChange={onCardChange}
            />
          </div>
        </div>
        <div className="col col-12">
          <div className="input-group input-w-lg-4 input-w-sm-full">
            <div className="input-label">卡號</div>
            <input
              data-name="cardNum"
              type="text"
              placeholder="1111 2222 3333 4444"
              onChange={onCardChange}
            />
          </div>
        </div>
        <div className="col col-12">
          <div className="input-group input-w-lg-3 input-w-sm-s3">
            <div className="input-label">有效期限</div>
            <input
              data-name="expireDate"
              type="text"
              placeholder="MM/YY"
              onChange={onCardChange}
            />
          </div>
          <div className="input-group input-w-lg-3 input-w-sm-s3">
            <div className="input-label">CVC / CCV</div>
            <input
              data-name="cvc"
              type="text"
              placeholder="123"
              onChange={onCardChange}
            />
          </div>
        </div>
      </section>
    </form>
  );
}
