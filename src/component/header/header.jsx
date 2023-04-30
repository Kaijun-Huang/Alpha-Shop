import { ReactComponent as Toggle } from "../../material/icons/toggle.svg";
import { ReactComponent as Search } from "../../material/icons/search.svg";
import { ReactComponent as Cart } from "../../material/icons/cart.svg";
import { ReactComponent as Moon } from "../../material/icons/moon.svg";
import { ReactComponent as Sun } from "../../material/icons/sun.svg";
import { ReactComponent as Logo } from "../../material/icons/logo.svg";

export function Header() {
  return (
    <>
      <header className="site-header">
        <div className="header-container mx-auto">
          <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
          <label for="navbar-toggle" className="burger-container">
            <svg className="icon-toggle cursor-point">
              {/* <use xlink:href="#svg-icon-toggle"></use> */}
              <Toggle />
            </svg>
          </label>

          <nav className="navbar-menu">
            <ul className="nav-list site-menu-list mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  男款
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  女款
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  最新消息
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  客製商品
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  聯絡我們
                </a>
              </li>
            </ul>
            <ul className="nav-list site-action-list">
              <li className="nav-item">
                <svg className="nav-icon cursor-point">
                  {/* <use xlink:href="#svg-icon-search"></use> */}
                  <Search />
                </svg>
              </li>
              <li className="nav-item">
                <svg className="nav-icon cursor-point">
                  {/* <use xlink:href="#svg-icon-cart"></use> */}
                  <Cart />
                </svg>
              </li>
              <li id="theme-toggle" className="nav-item">
                <svg className="nav-icon cursor-point">
                  {/* <use xlink:href="#svg-icon-moon"></use> */}
                  <Moon />
                </svg>
                <svg className="nav-icon cursor-point">
                  {/* <use xlink:href="#svg-icon-sun"></use> */}
                  <Sun />
                </svg>
              </li>
            </ul>
          </nav>

          <a className="header-logo-container" href="#">
            <svg className="icon-logo cursor-point">
              {/* <use xlink:href="#svg-icon-logo"></use> */}
              <Logo />
            </svg>
          </a>
        </div>
      </header>
    </>
  );
}

// {/* <header classNameName={styles["site-header"]}>
//         <div className={styles["header-container"]}>
//           {/* <!-- navbar-toggle --> */}
//           <input
//             id="navbar-toggle"
//             className={styles["navbar-toggle"]}
//             type="checkbox"
//           />
//           <label for="navbar-toggle" className={styles["burger-container"]}>
//             <svg className={styles["icon-toggle cursor-point"]}>
//               <Toggle />
//             </svg>
//           </label>

//           {/* <!-- navbar-menu --> */}
//           <nav className={styles["navbar-menu"]}>
//             <ul className={styles["nav-list site-menu-list mr-auto"]}>
//               <li className={styles["nav-item"]}>
//                 <a className={styles["nav-link"]} href="#">
//                   男款
//                 </a>
//               </li>
//               <li className={styles["nav-item"]}>
//                 <a className={styles["nav-link"]} href="#">
//                   女款
//                 </a>
//               </li>
//               <li className={styles["nav-item"]}>
//                 <a className={styles["nav-link"]} href="#">
//                   最新消息
//                 </a>
//               </li>
//               <li className={styles["nav-item"]}>
//                 <a className="nav-link" href="#">
//                   客製商品
//                 </a>
//               </li>
//               <li className={styles["nav-item"]}>
//                 <a className={styles["nav-link"]} href="#">
//                   聯絡我們
//                 </a>
//               </li>
//             </ul>
//             <ul className={styles["nav-list site-action-list"]}>
//               <li className={styles["nav-item"]}>
//                 <svg className={styles["nav-icon cursor-point"]}>
//                   <Search />
//                 </svg>
//               </li>
//               <li className={styles["nav-item"]}>
//                 <svg className={styles["nav-icon cursor-point"]}>
//                   <Cart />
//                 </svg>
//               </li>
//               <li id="theme-toggle" className={styles["nav-item"]}>
//                 <svg className={styles["nav-icon cursor-point"]}>
//                   <Moon />
//                 </svg>
//                 <svg className={styles["nav-icon cursor-point"]}>
//                   <Sun />
//                 </svg>
//               </li>
//             </ul>
//           </nav>

//           {/* <!-- logo --> */}
//           <a className={styles["header-logo-container"]} href="#">
//             <svg className={styles["icon-logo cursor-point"]}>
//               <Logo />
//             </svg>
//           </a>
//         </div>
//       </header> */}
