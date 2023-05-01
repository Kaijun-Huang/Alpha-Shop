import { Header } from "./component/Header/Header";
import { Main } from "./component/Main/Main";
import { Cart } from "./component/Cart/Cart";
import { Footer } from "./component/Footer/Footer";

import "./component/style/main.scss";

function App() {
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

export default App;
