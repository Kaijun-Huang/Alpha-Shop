import { ReactComponent as Logo } from "assets/icons/logo.svg";
import { ReactComponent as Facebook } from "assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "assets/icons/instagram.svg";
import { ReactComponent as Whatsapp } from "assets/icons/whatsapp.svg";
import styles from "./footer.module.scss";
import "component/base.scss";
import "component/reset.scss";
export default function Footer() {
  return (
    <>
      <footer className={styles["site-footer"]}>
        <div className={styles["footer-container"]}>
          <div className={styles["footer-logo-container"]}>
            <svg className={styles["icon-logo"]}>
              <Logo />
            </svg>
          </div>
          <section className={styles["footer-section"]}>
            <h2 className={styles["section-title"]}>客戶服務</h2>
            <div className={styles["section-content"]}>
              <a className={styles["page-link"]} href="#">
                運送說明
              </a>
              <a className={styles["page-link"]} href="#">
                退換貨相關
              </a>
              <a className={styles["page-link"]} href="#">
                付款資訊
              </a>
              <a className={styles["page-link"]} href="#">
                FAQ
              </a>
            </div>
          </section>
          <section className={styles["footer-section"]}>
            <h2 className={styles["section-title"]}>關於我們</h2>
            <div className={styles["section-content"]}>
              <a className={styles["page-link"]} href="#">
                品牌故事
              </a>
              <a className={styles["page-link"]} href="#">
                媒體聯繫
              </a>
              <a className={styles["page-link"]} href="#">
                Press kit
              </a>
            </div>
          </section>
          <section className={styles["footer-section"]}>
            <h2 className={styles["section-title"]}>資訊</h2>
            <div className={styles["section-content"]}>
              <a className={styles["page-link"]} href="#">
                隱私權政策
              </a>
              <a className={styles["page-link"]} href="#">
                Cookie
              </a>
              <a className={styles["page-link"]} href="#">
                GDPR
              </a>
            </div>
          </section>
          <section className={styles["footer-section"]}>
            <h2 className={styles["section-title"]}>追蹤 ALPHA Shop</h2>
            <div className={styles["section-content"]}>
              <div className={styles["tel-info"]}>+886 02123-45678</div>
              <div className={styles["social-icon-group"]}>
                <svg
                  className={`${styles["social-icon"]} ${styles["page-link"]}`}
                >
                  <Facebook />
                </svg>
                <svg
                  className={`${styles["social-icon"]} ${styles["page-link"]}`}
                >
                  <Instagram />
                </svg>
                <svg
                  className={`${styles["social-icon"]} ${styles["page-link"]}`}
                >
                  <Whatsapp />
                </svg>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}
