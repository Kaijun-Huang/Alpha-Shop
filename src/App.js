import Header from "component/Header/Header";
import Main from "component/Main/Main";
import Footer from "component/Footer/Footer";
import "style/Base.scss";
import "style/Reset.scss";

function App() {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ALPHA Shop</title>
        <link rel="stylesheet" href="./dist/main.css" />
        <script src="./dist/bundle.js" type="text/javascript"></script>
      </head>
      <body>
        <div id="svg-icons-container" style={{ display: "none" }}></div>
        <Header />
        <Main />
        <Footer />
      </body>
    </>
  );
}

export default App;
