import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import styleImg from "../../assets/svgs/style.svg";
import ImageSwiper from "../common/ImageSwiper";
import rightArrow from "../../assets/svgs/black-right-arrow.svg";

export default function StyleSection() {
  return (
    <>
      <div className={styles.style_section_wrapper}>
        <div className={styles.style_section_container}>
          <div className={styles.swiper_img_container}>
            <ImageSwiper />
          </div>
          <div className={styles.style_section_details}>
            <Image src={styleImg} alt="form" height={64} width={64} />
            <div className={styles.style_section_header}>Select Your Style</div>
            <div className={styles.style_section_subheader}>
              Match your card to your personality. Whether you like a minimal
              look or something that catches everyone&apos;s eyes, we&apos;ve
              got a style for you. You can update your style every year, for a
              small fee
            </div>
          </div>
        </div>
      </div>

      <div className={styles.msite_style_form}>
        <div className={styles.msite_header}>Select Your Style</div>
        <div className={styles.msite_subheader}>
          Whether you like a minimal look or something that catches
          everyone&apos;s eyes. We have a Card design for you
        </div>
        <div className={styles.btn_text_container}>
          <div className={styles.btn_text}>Get Started</div>
          <Image src={rightArrow} alt="right-arrow" width={16} height={16} />
        </div>
      </div>
    </>
  );
}
