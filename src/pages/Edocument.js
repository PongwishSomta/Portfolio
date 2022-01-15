/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import PText from "../components/PText";
import SectionTitle from "../components/SectionTitle";
import ScrollDownArrow from "../assets/images/scroll-down-arrow.png";
import edoc from "../assets/images/edoc.jpg";
import edoc1 from "../assets/images/edoc1.png";
import edoc2 from "../assets/images/edoc2.png";
import edoc3 from "../assets/images/edoc3.png";
import edoc4 from "../assets/images/edoc4.png";

import "swiper/swiper-bundle.min.css";

// install Swiper modules
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);

const EdocStyle = styled.div`
  padding: 10rem 0;
  .container {
    max-width: 1000px;
  }
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .project__info {
    margin-bottom: 4rem;
    .para {
      max-width: 1000px;
    }
  }
  .project__heading {
    font-family: "IBM Bold";
    font-size: 3.6rem;
    margin-bottom: 3rem;
    color: var(--orange);
  }
  .project__img {
    max-width: 1000px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
    border-radius: 20px;
    margin-bottom: 5rem;
  }
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 5rem;
    max-width: 1000px;
    margin: 0 auto;
  }
  .contactBanner__heading {
    font-size: 2.5rem;
    margin-bottom: 4px;
    font-family: "IBM Bold";
  }
  .description {
    font-size: 1.7rem;
  }
  .orange {
    color: var(--orange);
    font-family: "IBM Bold";
  }
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;

    bottom: 20px;
    width: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }
  .swiper-container {
    padding-top: 7rem;
    max-width: 100%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    height: 50px;
    width: 50px;
    background: var(--deep-dark);
    z-index: 99;
    right: 60px;
    left: auto;
    top: 0;
    transform: translateY(50%);
    color: var(--gray-1);
    border-radius: 8px;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev::after,
  .swiper-button-next::after {
    font-size: 2rem;
  }
  .port {
    border-radius: 8px;
  }
  .certificates {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 2rem;
  }
  .certi_item {
    margin-top: 15px;
  }
  @media only screen and (max-width: 1208px) {
    .hero__scrollDown {
      display: none;
    }
  }
  @media only screen and (max-width: 768px) {
    .port {
      height: 350px;
    }
    .certi_desc {
      font-size: 19px;
      line-height: 1.5;
    }

    .screenshot {
      display: none;
    }
  }
`;

export default function Edocument() {
  return (
    <EdocStyle>
      <div className="container">
        <SectionTitle
          heading="E-document"
          subheading="ระบบดูแลผู้ป่วยอัลไซเมอร์"
        />

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          navigation
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 1,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <img
              src={edoc}
              className="project__img"
              style={{ borderRadius: "20px" }}
              alt=""
            />
          </SwiperSlide>
        </Swiper>

        <div className="hero__scrollDown">
          <p>Scroll</p>
          <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
        </div>
        <div className="project__info">
          <PText>
            <h2 className="project__heading">รายละเอียดโดยย่อ</h2>
            E-document
            เป็นระบบเอกสารอัจริยะที่พัฒนาขึ้นมาเพื่อแก้ไขปัญหาการเรื่องเอกสารที่ในงานราชการมักจะมีปัญหาที่เอกสารคำสั่งต่าง
            ๆ ที่ออกมากว่าจะถึงผู้รับสารมีเวลา
            นานและเป็นการใช้กระดาษอย่างสิ้นเปลือง โดยพัฒนาร่วมกับเทคโนโลยี thai
            nlp ของ AI FOR THAI ออกมาเป็น เว็บแอปพลิเคชัน และแอปพลิเคชันเพื่อ
            ใช้งาน โดยเริ่มทดลองใน ชุมนุมยุวคอมพิวเตอร์โรงเรียนยุพราชวิทยาลัย
          </PText>
        </div>

        <div className="contactBanner__wrapper">
          <h5 className="contactBanner__heading">
            <span className="orange">หน้าที่</span> :
            รับหน้าที่พัฒนาตัวแอพพลิเคชั่น YRC E-document
          </h5>
          <p className="description">
            โดย APPLICATION YRC E-document ถูกพัฒนาขึ้นด้วย Kotlin
            เพราะมีประสิทธิภาพและสามารถพัฒนาได้มากในเวลาที่สั้น
            และฐานข้อมูลกลางเป็น Firebase
            ที่มีขนาดและรูปแบบการรับข้อมูลหลายรูปแบบ
          </p>
        </div>

        <div className="project__info">
          <PText>
            <h2 className="project__heading" style={{ marginTop: "5rem" }}>
              รางวัลความสำเร็จ
            </h2>
            เข้าร่วมการแข่งขัน Thailand ICT Award (TICTA 2020) ชื่อผลงาน
            ระบบสารบรรณคำสั่งอิเล็คทรอนิกส์อัจฉริยะ
            โดยประยุกต์ใช้งานแพลตฟอร์มปัญญาประดิษฐ์สัญชาติไทย
          </PText>
        </div>

        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          navigation
          breakpoints={{
            // when window width is >= 0px
            0: {
              slidesPerView: 3,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 4,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide>
            <img
              src={edoc1}
              className="swipe__img"
              style={{ borderRadius: "15px" }}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={edoc2}
              className="swipe__img"
              style={{ borderRadius: "15px" }}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={edoc3}
              className="swipe__img"
              style={{ borderRadius: "15px" }}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={edoc4}
              className="swipe__img"
              style={{ borderRadius: "15px" }}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </EdocStyle>
  );
}
