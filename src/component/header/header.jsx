import { ReactComponent as Toggle } from "assets/icons/toggle.svg";
import { ReactComponent as Search } from "assets/icons/search.svg";
import { ReactComponent as Cart } from "assets/icons/cart.svg";
import { ReactComponent as Moon } from "assets/icons/moon.svg";
import { ReactComponent as Sun } from "assets/icons/sun.svg";
import { ReactComponent as Logo } from "assets/icons/logo.svg";
import "./Header.scss";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container mx-auto">
        <input id="navbar-toggle" className="navbar-toggle" type="checkbox" />
        <label for="navbar-toggle" className="burger-container">
          <svg className="icon-toggle cursor-point">
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
                <Search />
              </svg>
            </li>
            <li className="nav-item">
              <svg className="nav-icon cursor-point">
                <Cart />
              </svg>
            </li>
            <li id="theme-toggle" className="nav-item">
              <svg className="nav-icon cursor-point">
                <Moon />
              </svg>
              <svg className="nav-icon cursor-point">
                <Sun />
              </svg>
            </li>
          </ul>
        </nav>

        <a className="header-logo-container" href="#">
          <svg className="icon-logo cursor-point">
            <Logo />
          </svg>
        </a>
      </div>
    </header>
  );
}
