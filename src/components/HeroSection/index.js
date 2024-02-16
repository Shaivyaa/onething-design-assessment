import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import heroSectionBg from "../../assets/images/hero-section-bg.png";

export default function HeroSection() {
  return (
    <>
      <div className={styles.hero_section_wrapper}>
        <div className={styles.hero_section_container}>
          <div className={styles.hero_section_details}>
            <div className={styles.hero_section_header}>
              Build a Credit Card That is Definitely Yours
            </div>
            <div className={styles.hero_section_subheader}>
              With the OneSync Credit Card you can customise your card the way
              you want
            </div>
            <button className={styles.btn_container}>Get Started</button>
          </div>
          <div className={styles.hero_section_image}>
            <Image
              src={heroSectionBg}
              alt="hero-section-bg"
              width={600}
              height={420}
            />
          </div>
        </div>
      </div>
    </>
  );
}
