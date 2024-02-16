import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import rightArrow from "../../assets/svgs/right-arrow.svg";
import Dropdown from "../common/Dropdown";

export default function ContentSection() {
  return (
    <>
      <div className={styles.content_section_wrapper}>
        <div className={styles.content_section_container}>
          <div className={styles.content_section_header}>
            The Freedom to Create
            <br /> The Credit Card You Want
          </div>
          <div className={styles.content_section_description}>
            <div className={styles.text}>
              That&apos;s why it comes with benefits & rewards chosen by you.
              Available in multiple designs, your card comes in a style selected
              by you. You can come back each year, to edit your benefits or
              update your style.
            </div>
            <div className={styles.text}>
              Your OneSync Credit Card stays true to you, year after year. It’s
              the only card you&apos;ll ever need.
            </div>
            <div className={styles.btn_text_container}>
              <div className={styles.btn_text}>Get Started</div>
              <Image
                src={rightArrow}
                alt="right-arrow"
                width={24}
                height={24}
              />
            </div>
          </div>

          <div className={styles.dropdown}>
            <Dropdown />
          </div>
        </div>
      </div>
    </>
  );
}
