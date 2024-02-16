import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import styleImg from "../../assets/svgs/style.svg";
import ImageSwiper from "../common/ImageSwiper";
import rightArrow from "../../assets/svgs/black-right-arrow.svg";
import whiterightArrow from "../../assets/svgs/right-arrow.svg";

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

      <div className={styles.question_container}>
        <div className={styles.question_header}>
          Why the OneSync Card is the Best Choice for you?
        </div>
        <div className={styles.question_subheader}>
          You can create a Credit Card that fits all your needs on your own.
          Gone are the days when you had choose from premade credit cards with
          features that you did not need. <br />
          With the OneSync card you can save on all the things that you love to
          do with a unique personal touch
        </div>
        <div className={styles.btn_text_container}>
          <div className={styles.btn_question_text}>Get Started</div>
          <Image
            src={whiterightArrow}
            alt="right-arrow"
            width={16}
            height={16}
          />
        </div>
      </div>
    </>
  );
}
