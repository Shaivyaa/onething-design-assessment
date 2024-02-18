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
        grabCursor={true}
        spaceBetween={10}
        autoplay={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <div className="card">
            <div className="card__side card__side_front">
              <div className="flex__1">
                <p className="card__side__name-bank">bank</p>
                <div className="card__side__chip"></div>
                <p className="card__side__name-person">PAVLO MATVIIENKO</p>
              </div>
            </div>
            <div className="card__side card__side_back">
              <div className="card__side__black"></div>
              <p className="card__side__number">XXXX XXXX XXXX XXXX</p>
              <div className="flex__2">
                <p className="card__side__other-numbers card__side__other-numbers_1">
                  XX/XX
                </p>
                <p className="card__side__other-numbers card__side__other-numbers_2">
                  XXX
                </p>

                <div className="card__side__debit">debit</div>
              </div>
              <p className="card__side__other-info">
                BANK.UA | 0 800 205 205 |. ЛІЦЕНЗІЯ НБУ №92 ВІД 20.01.1994 | PCE
                PC100650 WORLD DEBIT
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="card__side card__side_front_red">
              <div className="flex__1">
                <p className="card__side__name-bank">Bank</p>
                <div className="card__side__chip"></div>
                <p className="card__side__name-person">PAVLO MATVIIENKO</p>
              </div>
            </div>
            <div className="card__side card__side_back_red">
              <div className="card__side__black"></div>
              <p className="card__side__number">XXXX XXXX XXXX XXXX</p>
              <div className="flex__2">
                <p className="card__side__other-numbers card__side__other-numbers_1">
                  XX/XX
                </p>
                <p className="card__side__other-numbers card__side__other-numbers_2">
                  XXX
                </p>

                <div className="card__side__debit">debit</div>
              </div>
              <p className="card__side__other-info">
                BANK.UA | 0 800 205 205 |. ЛІЦЕНЗІЯ НБУ №92 ВІД 20.01.1994 | PCE
                PC100650 WORLD DEBIT
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="card__side card__side_front">
              <div className="flex__1">
                <p className="card__side__name-bank">Bank</p>
                <div className="card__side__chip"></div>
                <p className="card__side__name-person">PAVLO MATVIIENKO</p>
              </div>
            </div>
            <div className="card__side card__side_back">
              <div className="card__side__black"></div>
              <p className="card__side__number">XXXX XXXX XXXX XXXX</p>
              <div className="flex__2">
                <p className="card__side__other-numbers card__side__other-numbers_1">
                  XX/XX
                </p>
                <p className="card__side__other-numbers card__side__other-numbers_2">
                  XXX
                </p>

                <div className="card__side__debit">debit</div>
              </div>
              <p className="card__side__other-info">
                BANK.UA | 0 800 205 205 |. ЛІЦЕНЗІЯ НБУ №92 ВІД 20.01.1994 | PCE
                PC100650 WORLD DEBIT
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="card__side card__side_front_red">
              <div className="flex__1">
                <p className="card__side__name-bank">Bank</p>
                <div className="card__side__chip"></div>
                <p className="card__side__name-person">PAVLO MATVIIENKO</p>
              </div>
            </div>
            <div className="card__side card__side_back_red">
              <div className="card__side__black"></div>
              <p className="card__side__number">XXXX XXXX XXXX XXXX</p>
              <div className="flex__2">
                <p className="card__side__other-numbers card__side__other-numbers_1">
                  XX/XX
                </p>
                <p className="card__side__other-numbers card__side__other-numbers_2">
                  XXX
                </p>

                <div className="card__side__debit">debit</div>
              </div>
              <p className="card__side__other-info">
                BANK.UA | 0 800 205 205 |. ЛІЦЕНЗІЯ НБУ №92 ВІД 20.01.1994 | PCE
                PC100650 WORLD DEBIT
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        style={{ textAlign: "center" }}
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={1}
        slidesPerView={4}
        freeMode={true}
        grabCursor={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={card} alt="card" width={73} height={46} />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={card2} alt="card" width={73} height={46} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={card} alt="card" width={73} height={46} />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={card2} alt="card" width={73} height={46} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
