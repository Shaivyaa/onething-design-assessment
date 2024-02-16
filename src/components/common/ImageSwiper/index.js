"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from "./index.module.scss";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import card from "../../../assets/images/card.png";
import card1 from "../../../assets/images/card1.png";
import card2 from "../../../assets/images/card2.png";
import card3 from "../../../assets/images/card3.png";

export default function ImageSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          textAlign: "center",
          marginBottom: "20px",
        }}
        loop={true}
        spaceBetween={10}
        autoplay={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <Image
            className={styles.swiper_img}
            src={card}
            alt="card"
            width={389}
            height={243}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiper_img}
            src={card1}
            alt="card"
            width={389}
            height={243}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiper_img}
            src={card2}
            alt="card"
            width={389}
            height={243}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className={styles.swiper_img}
            src={card3}
            alt="card"
            width={389}
            height={243}
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        style={{ textAlign: "center" }}
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={1}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={card} alt="card" width={73} height={46} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={card1} alt="card" width={73} height={46} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={card2} alt="card" width={73} height={46} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={card3} alt="card" width={73} height={46} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
