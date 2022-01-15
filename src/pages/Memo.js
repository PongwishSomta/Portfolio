/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import PText from "../components/PText";
import SectionTitle from "../components/SectionTitle";
import ScrollDownArrow from "../assets/images/scroll-down-arrow.png";
import MemoImg1 from "../assets/images/memo1.jpeg";
import MemoImg2 from "../assets/images/memo2.gif";
import MemoImg3 from "../assets/images/memo3.gif";
import MemoImg4 from "../assets/images/memo4.jpg";
import MemoImg5 from "../assets/images/memo5.jpg";
import Nsc from "../assets/images/cer1.jpg";
import cer19 from "../assets/images/cer19.jpg";
import cer20 from "../assets/images/cer20.jpg";
import proposal from "../assets/images/proposal.pdf";

import "swiper/swiper-bundle.min.css";

// install Swiper modules
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);

const MemoStyle = styled.div`
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
    margin-top: 5rem;
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
    padding-top: 3rem;
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

export default function Memo() {
  return (
    <MemoStyle>
      <div className="container">
        <SectionTitle heading="MEMO" subheading="ระบบดูแลผู้ป่วยอัลไซเมอร์" />

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
              src={MemoImg1}
              className="project__img"
              style={{ borderRadius: "20px" }}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={MemoImg2}
              className="project__img"
              style={{ borderRadius: "20px" }}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={MemoImg3}
              className="project__img"
              style={{ borderRadius: "20px" }}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={MemoImg4}
              className="project__img"
              style={{ borderRadius: "20px" }}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={MemoImg5}
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
            <h2 className="project__heading">MEMO คืออะไร?</h2>
            ระบบช่วยเหลือและดูแลผู้ป่วยอัลไซเมอร์ด้วยระบบปัญญาประดิษฐ์และการสั่งการด้วยเสียงเป็นโปรเจคที่พัฒนาขึ้นมาเพื่อแก้ปัญหา
            และช่วยเหลือโรคอัลไซเมอร์ ที่เกิดในปัจจุบัน
            โดยเป็นการประยุกต์เอาเทคโนโลยีในยุคปัจจุบันคือ ai หรือปัญญาประดิษฐ
            และเทคโนโลยี voice assistance หรือการสั่งการด้วยเสียง
            มาใช้ในการแก้ปัญหา โดยมานำมาพัฒนาเป็นกล้อง ที่ผู้ป่วยสามารถ
            พูดคุยโต้ตอบได้ สามารถทำหน้าที่แทนผู้ช่วยส่วนตัวของผู้ป่วย
            สามารถแจ้งเตือน เตือนความจำกิจวัตร ประจำวันต่าง ๆ และการใช้กล้อง ip
            camera
            เพื่อคอยตรวจจับเหตุการล้มของผู้สูงอายุและสามารถช่วยเหลือได้อย่างทันท่วงที
          </PText>
        </div>

        <div className="project__info">
          <PText>
            <h2 className="project__heading">จุดประสงค์ในการพัฒนา</h2>
            ระบบช่วยเหลือและดูแลผู้ป่วยอัลไซเมอร์ด้วยระบบปัญญาประดิษฐ์และการสั่งการด้วยเสียงถูกพัฒนาขึ้นมา
            ภายใต้ ปัญหาของโรคอัลไซเมอร์ ในประเทศไทย
            ซึ่งเป็นโรคที่มีผู้ป่วยจำนวนมาก และประกอบกับเทคโนโลยีในปัจจุบัน
            ทำให้ทางทีมพัฒนาคิดว่า เราสามารถพัฒนาระบบเพื่อแก้ไขปัญหานี้
            โดยแก้ปัญหาเรื่อง ของการหลงลืม กิจวัตรประจำวันต่าง ๆ
            ที่เป็นปัญหาหลัก ด้วยการใช้ Voice Assistan เพราะเป็นเทคโนโลยี
            ที่ผู้ป่วยที่เป็นผู้สูงอายุสามารถใช้งานได้
            และการพัฒนาการตรวจจับการล้ม ด้วย Image Processing เพื่อป้องกันการล้ม
            และนำไปสู่เหตุไม่คาคฝัน และทางทีมผู้พัฒนาอยากที่จะให้MEMO
            เป็นหนึ่งในเทคโนโลยีและสิ่งประดิษฐ์
            ที่สามารถช่วยแก้ไขปัญหาโรคอัลไซล์เมอร์ได้
          </PText>
        </div>
        <div className="project__info" >
          <iframe
            src={`${proposal}#view=fitH`}
            title="testPdf"
            height="800px"
            width="100%"
          />
        </div>

        <div className="contactBanner__wrapper">
          <h5 className="contactBanner__heading">
            <span className="orange">หน้าที่</span> :
            รับหน้าที่พัฒนาตัวแอพพิลเคชั่น MEMO และดูภาพรวมของระบบ MEMO
          </h5>
          <p className="description">
            โดย APPICATION MEMO ถูกพัฒนาขึ้นด้วย Flutter
            เพราะมีประสิทธิภาพและสามารถพัฒนาได้มากในเวลาที่สั้น
            และฐานข้อมูลกลางเป็น Firebase
            ที่มีขนาดและรูปแบบการรับข้อมูลหลายรูปแบบเหมาะสำหรับระบบ MEMO
          </p>
        </div>

        <div className="project__info">
          <PText>
            <h2 className="project__heading" style={{ marginTop: "5rem" }}>
              รางวัลความสำเร็จ
            </h2>

            <img src={Nsc} className="port" alt="certificate" />
            <p className="certi_desc">
              ได้รับทุนสนับสนุน รอบนำเสนอผลงาน
              การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทย ครั้งที่ 23 (NSC
              2021) หมวดโปรแกรมเพื่อการประยุกต์การใช้งาน
            </p>

            <div className="certificates">
              <div className="certi_item">
                <img src={cer19} className="port" alt="certificate" />
                <p className="certi_desc">
                  ได้รับรางวัลเหรียญทอง การประกวดโครงงานวิทยาศาสตร์
                  สาขาเทคโนโลยี
                </p>
              </div>
              <div className="certi_item">
                <img src={cer20} className="port" alt="certificate" />
                <p className="certi_desc">
                  ได้รับรางวัลเหรียญทอง การประกวดโครงงานสะเต็มศึกษา
                  ประเภทนำเสนอด้วยโปสเตอร์ในระบบออนไลน์
                </p>
              </div>
            </div>
          </PText>
        </div>
        
      </div>
    </MemoStyle>
  );
}
