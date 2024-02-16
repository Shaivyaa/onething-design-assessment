import React from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import rewardImg from "../../assets/svgs/reward.svg";
import Swipeer from "../common/Swiper";
import rightArrow from "../../assets/svgs/black-right-arrow.svg";

export default function RewardSection() {
  return (
    <>
      <div className={styles.reward_section_wrapper}>
        <div className={styles.reward_section_container}>
          <div className={styles.reward_section_details}>
            <Image src={rewardImg} alt="form" height={64} width={64} />
            <div className={styles.reward_section_header}>
              Choose Your Rewards
            </div>
            <div className={styles.reward_section_subheader}>
              Match your card to your lifestyle. We&apos;ve got benefits from
              across brands & categories for you to choose from. Each benefit
              has an attached fee. Just add the ones you like to your card.
            </div>
          </div>
          <div className={styles.reward_section_swiper}>
            <Swipeer />
          </div>
        </div>
      </div>

      <div className={styles.msite_reward_form}>
        <div className={styles.msite_header}>Choose Your Rewards</div>
        <div className={styles.msite_subheader}>
          Choose rewards from brands and categories that fit in with your
          personality. Your card&apos;s annual fee will based on the rewards you
          select.
        </div>
        <div className={styles.btn_text_container}>
          <div className={styles.btn_text}>Get Started</div>
          <Image src={rightArrow} alt="right-arrow" width={16} height={16} />
        </div>
      </div>
    </>
  );
}
