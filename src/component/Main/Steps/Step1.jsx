import { Cities } from "./data";

export default function AddressPhase({ onBuyerInfoChange, test }) {
  return (
    <form className="col col-12" data-phase="address">
      <h3 className="form-title">寄送地址</h3>
      <section className="form-body col col-12">
        <div className="col col-12">
          <div className="input-group input-w-lg-2 input-w-sm-s1">
            <div className="input-label">稱謂</div>
            <div className="select-container">
              <select data-name="salutation" onChange={onBuyerInfoChange}>
                <option value="mr" defaultValue="先生">
                  先生
                </option>
                <option value="ms">女士</option>
                <option value="mx">不明</option>
              </select>
            </div>
          </div>
          <div className="input-group input-w-lg-4 input-w-sm-s2">
            <div className="input-label">姓名</div>
            <input
              data-name="name"
              type="text"
              placeholder="請輸入姓名"
              onChange={onBuyerInfoChange}
            />
          </div>
        </div>
        <div className="col col-12">
          <div className="input-group input-w-lg-3 input-w-sm-full">
            <div className="input-label">電話</div>
            <input
              data-name="mobile"
              type="tel"
              placeholder="請輸入行動電話"
              onChange={onBuyerInfoChange}
            />
          </div>
          <div className="input-group input-w-lg-3 input-w-sm-full">
            <div className="input-label">Email</div>
            <input
              data-name="Email"
              type="email"
              placeholder="請輸入電子郵件"
              onChange={onBuyerInfoChange}
            />
          </div>
        </div>
        <div className="col col-12">
          <div className="input-group input-w-lg-2 input-w-sm-full">
            <div className="input-label">縣市</div>
            <div className="select-container">
              <select required onChange={onBuyerInfoChange} data-name="city">
                {Cities.map((city) => (
                  <option key={city.value} value={city.text}>
                    {city.text}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="input-group input-w-lg-4 input-w-sm-full">
            <div className="input-label">地址</div>
            <input
              data-name="address"
              type="text"
              placeholder="請輸入地址"
              onChange={onBuyerInfoChange}
            />
          </div>
        </div>
      </section>
    </form>
  );
}
