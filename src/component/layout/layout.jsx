import { Header } from "../header/header";
import { Main } from "../main/main";
import { Cart } from "../cart/cart";
import { Footer } from "../footer/footer";

import "../style/main.scss";

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
        {/* <Header /> */}
        <Main />
        <Cart />
        <Footer />
      </body>
    </>
  );
}

export default Layout;
