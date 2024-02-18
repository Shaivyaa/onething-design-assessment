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
import movieImg from "../../../assets/svgs/movie.svg";

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
          <div className={styles.card}>
            <div className={styles.card__date}>
              <Image src={movieImg} alt="" height={54} width={54} />
              <div className={styles.container_swiper}>
                <span className={styles.date}>Buy 1 Get 1</span>
                <span className={styles.date}>Movie Tickets</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.card__date}>
              <Image src={movieImg} alt="" height={54} width={54} />
              <div className={styles.container_swiper}>
                <span className={styles.date}>Buy 1 Get 1</span>
                <span className={styles.date}>Movie Tickets</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.card__date}>
              <Image src={movieImg} alt="" height={54} width={54} />
              <div className={styles.container_swiper}>
                <span className={styles.date}>Buy 1 Get 1</span>
                <span className={styles.date}>Movie Tickets</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.card__date}>
              <Image src={movieImg} alt="" height={54} width={54} />
              <div className={styles.container_swiper}>
                <span className={styles.date}>Buy 1 Get 1</span>
                <span className={styles.date}>Movie Tickets</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <div className={styles.card__date}>
              <Image src={movieImg} alt="" height={54} width={54} />
              <div className={styles.container_swiper}>
                <span className={styles.date}>Buy 1 Get 1</span>
                <span className={styles.date}>Movie Tickets</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
