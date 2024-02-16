import React from "react";
import styles from "./index.module.scss";

export default function FAQSection() {
  return (
    <>
      <div className={styles.accordian_wrapper}>
        <div className={styles.accordian_container}>
          <div className={styles.accordian_header}>FAQs</div>
          <div class={styles.accordion}>
            <div>
              <input
                type="checkbox"
                id="section1"
                className={styles.accordion__input}
              />
              <label for="section1" className={styles.accordion__label}>
                Who&apos;s eligible for the Card?
              </label>
              <div className={styles.accordion__content}>
                <p>
                  If you&apos;re between 23-60 years of age, have a monthly
                  income of ₹25,000 or more, and have never defaulted on a
                  credit card or loan payment, we&apos;d encourage you to apply.
                  However, your application will be declined if your location
                  isn&apos;t serviceable or if your credit score is low.
                </p>
              </div>
            </div>
            <div className={styles.border}></div>
            <div>
              <input
                type="checkbox"
                id="section2"
                className={styles.accordion__input}
              />
              <label for="section2" className={styles.accordion__label}>
                Is my location serviceable?
              </label>
              <div className={styles.accordion__content}>
                <p>
                  If you&apos;re between 23-60 years of age, have a monthly
                  income of ₹25,000 or more, and have never defaulted on a
                  credit card or loan payment, we&apos;d encourage you to apply.
                  However, your application will be declined if your location
                  isn&apos;t serviceable or if your credit score is low.
                </p>
              </div>
            </div>
            <div className={styles.border}></div>
            <div>
              <input
                type="checkbox"
                id="section3"
                className={styles.accordion__input}
              />
              <label for="section3" className={styles.accordion__label}>
                What if I don&apos;t want to pay at all?
              </label>
              <div className={styles.accordion__content}>
                <p>
                  If you&apos;re between 23-60 years of age, have a monthly
                  income of ₹25,000 or more, and have never defaulted on a
                  credit card or loan payment, we&apos;d encourage you to apply.
                  However, your application will be declined if your location
                  isn&apos;t serviceable or if your credit score is low.
                </p>
              </div>
            </div>
            <div className={styles.border}></div>
            <div>
              <input
                type="checkbox"
                id="section4"
                className={styles.accordion__input}
              />
              <label for="section4" className={styles.accordion__label}>
                What happens after I&apos;ve build my card?
              </label>
              <div className={styles.accordion__content}>
                <p>
                  If you&apos;re between 23-60 years of age, have a monthly
                  income of ₹25,000 or more, and have never defaulted on a
                  credit card or loan payment, we&apos;d encourage you to apply.
                  However, your application will be declined if your location
                  isn&apos;t serviceable or if your credit score is low.
                </p>
              </div>
            </div>
            <div className={styles.border}></div>
          </div>
        </div>
      </div>
    </>
  );
}
