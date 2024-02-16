import React from "react";
import styles from "./index.module.scss";

export default function Footer() {
  return (
    <>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_container}>
          <div className={styles.footer_description}>
            <div className={styles.footer_header}>OneSync Credit Card</div>
            <div className={styles.footer_subheader}>Experience Freedom</div>
            <button className={styles.btn_container}>Get Started</button>
          </div>
          <div className={styles.footer_links_container}>
            <div className={styles.footer_link_first}>
              <div className={styles.link_text}>Manage Your Card</div>
              <div className={styles.link_text}>Track Your Application</div>
              <div className={styles.link_text}>Contact Us</div>
            </div>

            <div className={styles.footer_link_other}>
              <div className={styles.link_text}>Manage Your Card</div>
              <div className={styles.link_text}>Track Your Application</div>
              <div className={styles.link_text}>Contact Us</div>
            </div>

            <div className={styles.footer_link_other}>
              <div className={styles.link_text}>Manage Your Card</div>
              <div className={styles.link_text}>Track Your Application</div>
              <div className={styles.link_text}>Contact Us</div>
            </div>

            <div className={styles.footer_link_other}>
              <div className={styles.link_text}>Manage Your Card</div>
              <div className={styles.link_text}>Track Your Application</div>
              <div className={styles.link_text}>Contact Us</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
