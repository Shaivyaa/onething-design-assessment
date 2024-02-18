"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import styles from "./index.module.scss";
import { Autoplay, EffectCoverflow, FreeMode } from "swiper/modules";
import Image from "next/image";
import swiperImg from "../../../assets/images/swiper-img.png";
import swiperNew from "../../../assets/images/swiper-new.png";

export default function Swipeer() {
  return (
    <>
      <Swiper
        slidesPerView={1.7}
        effect="coverflow"
        coverflowEffect={{
          slideShadows: false,
        }}
        grabCursor={true}
        spaceBetween={20}
        autoplay={true}
        modules={[Autoplay, EffectCoverflow]}
        loop={true}
        centeredSlides={true}
        className="mySwiper"
        breakpoints={{
          580: {
            slidesPerView: 1.65,
            spaceBetween: 72,
          },
        }}
      >
        <SwiperSlide>
          <Image
            className={styles.swiper_img}
            src={swiperImg}
            alt="swiper-img"
            height={400}
            width={350}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiper_img}
            src={swiperNew}
            alt="swiper-img"
            height={400}
            width={350}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiper_img}
            src={swiperImg}
            alt="swiper-img"
            height={400}
            width={350}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiper_img}
            src={swiperNew}
            alt="swiper-img"
            height={400}
            width={350}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiper_img}
            src={swiperImg}
            alt="swiper-img"
            height={400}
            width={350}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
