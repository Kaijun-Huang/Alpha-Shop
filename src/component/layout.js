import { StepProgress } from "./stepProgress";
import { Step1 } from "./step/step1";
import { Step2 } from "./step/step2";
import { Step3 } from "./step/step3";
import { StepControl } from "./stepControl";

function Layout() {
  return (
    <>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ALPHA Shop</title>
        <link rel="stylesheet" href="./dist/main.css" />
        <script src="./dist/bundle.js" type="text/javascript"></script>
      </head>
      <body>
        <div id="svg-icons-container" style={{ display: "none" }}></div>

        {/* header */}
        <header class="site-header">
          <div class="header-container mx-auto">
            {/* <!-- navbar-toggle --> */}
            <input id="navbar-toggle" class="navbar-toggle" type="checkbox" />
            <label for="navbar-toggle" class="burger-container">
              <svg class="icon-toggle cursor-point">
                {/* <use xlink:href="#svg-icon-toggle"></use> */}
              </svg>
            </label>

            {/* <!-- navbar-menu --> */}
            <nav class="navbar-menu">
              <ul class="nav-list site-menu-list mr-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    男款
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    女款
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    最新消息
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    客製商品
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    聯絡我們
                  </a>
                </li>
              </ul>
              <ul class="nav-list site-action-list">
                {/* <!-- search --> */}
                <li class="nav-item">
                  <svg class="nav-icon cursor-point">
                    {/* <use xlink:href="#svg-icon-search"></use> */}
                  </svg>
                </li>
                {/* <!-- cart --> */}
                <li class="nav-item">
                  <svg class="nav-icon cursor-point">
                    {/* <use xlink:href="#svg-icon-cart"></use> */}
                  </svg>
                </li>
                <li id="theme-toggle" class="nav-item">
                  {/* <!-- moon --> */}
                  <svg class="nav-icon cursor-point">
                    {/* <use xlink:href="#svg-icon-moon"></use> */}
                  </svg>
                  {/* <!-- sun --> */}
                  <svg class="nav-icon cursor-point">
                    {/* <use xlink:href="#svg-icon-sun"></use> */}
                  </svg>
                </li>
              </ul>
            </nav>

            {/* <!-- logo --> */}
            <a class="header-logo-container" href="#">
              <svg class="icon-logo cursor-point">
                {/* <use xlink:href="#svg-icon-logo"></use> */}
              </svg>
            </a>
          </div>
        </header>

        {/* main */}
        <main class="site-main">
          <div class="main-container">
            {/* <!-- register --> */}
            <section
              class="register-container col col-lg-6 col-sm-12"
              data-phase="1"
              data-total-price="0"
            >
              {/* <!--register progress--> */}
              <StepProgress />
              {/* <!-- register-form --> */}
              <section class="form-container col col-12">
                {/* <!-- address phase --> */}
                <Step1 />
                {/* <!-- shipping phase --> */}
                <Step2 />
                {/* <!-- credit-card phase --> */}
                <Step3 />
              </section>
            </section>

            {/* <!-- cart --> */}
            <section class="cart-container col col-lg-5 col-sm-12">
              <h3 class="cart-title">購物籃</h3>

              <section class="product-list col col-12" data-total-price="0">
                <div
                  class="product-container col col-12"
                  data-count="0"
                  data-price="3999"
                >
                  <img
                    class="img-container"
                    src="./public/images/product-1.jpg"
                  />
                  <div class="product-info">
                    <div class="product-name">破壞補丁修身牛仔褲</div>
                    <div class="product-control-container">
                      <div class="product-control">
                        <svg class="product-action minus">
                          {/* <use xlink:href="#svg-icon-minus"></use> */}
                        </svg>
                        <span class="product-count"></span>
                        <svg class="product-action plus">
                          {/* <use xlink:href="#svg-icon-plus"></use> */}
                        </svg>
                      </div>
                    </div>
                    <div class="price"></div>
                  </div>
                </div>
                <div
                  class="product-container col col-12"
                  data-count="0"
                  data-price="1299"
                >
                  <img
                    class="img-container"
                    src="./public/images/product-2.jpg"
                  />
                  <div class="product-info">
                    <div class="product-name">刷色直筒牛仔褲</div>
                    <div class="product-control-container">
                      <div class="product-control">
                        <svg class="product-action minus">
                          {/* <use xlink:href="#svg-icon-minus"></use> */}
                        </svg>
                        <span class="product-count"></span>
                        <svg class="product-action plus">
                          {/* <use xlink:href="#svg-icon-plus"></use> */}
                        </svg>
                      </div>
                    </div>
                    <div class="price"></div>
                  </div>
                </div>
              </section>

              <section class="cart-info shipping col col-12">
                <div class="text">運費</div>
                <div class="price"></div>
              </section>
              <section class="cart-info total col col-12">
                <div class="text">小計</div>
                <div class="price"></div>
              </section>
            </section>

            {/* <!-- progress-control --> */}
            <StepControl />
          </div>
        </main>

        {/* <!-- footer --> */}
        <footer class="site-footer">
          <div class="footer-container">
            <div class="footer-logo-container">
              <svg class="icon-logo">
                {/* <use xlink:href="#svg-icon-logo"></use> */}
              </svg>
            </div>
            <section class="footer-section">
              <h2 class="section-title">客戶服務</h2>
              <div class="section-content">
                <a class="page-link" href="#">
                  運送說明
                </a>
                <a class="page-link" href="#">
                  退換貨相關
                </a>
                <a class="page-link" href="#">
                  付款資訊
                </a>
                <a class="page-link" href="#">
                  FAQ
                </a>
              </div>
            </section>
            <section class="footer-section">
              <h2 class="section-title">關於我們</h2>
              <div class="section-content">
                <a class="page-link" href="#">
                  品牌故事
                </a>
                <a class="page-link" href="#">
                  媒體聯繫
                </a>
                <a class="page-link" href="#">
                  Press kit
                </a>
              </div>
            </section>
            <section class="footer-section">
              <h2 class="section-title">資訊</h2>
              <div class="section-content">
                <a class="page-link" href="#">
                  隱私權政策
                </a>
                <a class="page-link" href="#">
                  Cookie
                </a>
                <a class="page-link" href="#">
                  GDPR
                </a>
              </div>
            </section>
            <section class="footer-section">
              <h2 class="section-title">追蹤 ALPHA Shop</h2>
              <div class="section-content">
                <div class="tel-info">+886 02123-45678</div>
                <div class="social-icon-group">
                  <svg class="social-icon cursor-point">
                    {/* <use xlink:href="#svg-icon-facebook"></use> */}
                  </svg>
                  <svg class="social-icon cursor-point">
                    {/* <use xlink:href="#svg-icon-instagram"></use> */}
                  </svg>
                  <svg class="social-icon cursor-point">
                    {/* <use xlink:href="#svg-icon-whatsapp"></use> */}
                  </svg>
                </div>
              </div>
            </section>
          </div>
        </footer>
      </body>
    </>
  );
}

export default Layout;
