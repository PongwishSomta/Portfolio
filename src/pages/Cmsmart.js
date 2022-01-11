/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import PText from '../components/PText';
import SectionTitle from '../components/SectionTitle';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.png';
import CmPoster from '../assets/images/poster.jpg';
import CmImg1 from '../assets/images/cm1.png';
import CmImg2 from '../assets/images/cm2.png';
import CmImg3 from '../assets/images/cm3.png';
import CmImg4 from '../assets/images/cm4.png';
import CmImg5 from '../assets/images/cm5.png';
import CmImg6 from '../assets/images/cm6.png';
import CmImg7 from '../assets/images/cm7.png';


import 'swiper/swiper-bundle.min.css';

// install Swiper modules
SwiperCore.use([Navigation]);
SwiperCore.use([Autoplay]);


const CmStyle = styled.div`
  padding: 10rem 0;
 
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
    max-width: 100%;
    margin: 0 auto;
  
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
  .col-6 {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 5rem;
    margin-top: 7rem;
  }
  .swiper-container {
      margin-top: 2rem;
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
  .swipe__img{
      max-width:90%;
  }
  @media only screen and (max-width: 1208px) {
    .hero__scrollDown {
      display: none;
    }
  }
  @media only screen and (max-width: 768px) {
  }
`;

export default function Cmsmart() {
  return (
    <CmStyle>
      <div className="container">
        <SectionTitle heading="CMSMART+" subheading="แอพพลิเคชั่นแก้ปัญหาการท่องเที่ยวในเชียงใหม่" />

       

      <div className='col-6'>
      <img
          src={CmPoster}
          className="project__img"
          style={{ borderRadius: '8px' }}
          alt=""
        />
        <div>

        <div className="hero__scrollDown">
          <p>Scroll</p>
          <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
        </div>
        <div className="project__info">
          <PText>
            <h2 className="project__heading">ซีเอ็มสมาทพลัส คืออะไร?</h2>
            แอปพลิเคชัน ซีเอ็มสมาทพลัส (Cmsmart+) ถูกพัฒนาขึ้นมาเพื่อแก้ไขปัญหาที่ทำงทีมผู้พัฒนาได้พบเจอเกี่ยวกับการท่องเที่ยวในเชียงใหม่ ที่ตัวจังหวัดเองนั้น เป็น
จังหวัดที่มีสถานที่ท่องเที่ยวมากมายแต่ยังขาดการสนับสนุนและการโปรโมทจากภาครัฐหรือหน่วยงานที่เกี่ยวข้องและจำนวนนักท่องเที่ยวที่เพิ่มขึ้นอย่างเห็นได้ชัด
ทำให้อาจเกิดการเอาเปรียบจากทัวร์หรือบริษัทที่เกี่ยวข้องในการเอาเปรียบนักท่องเที่ยว และพัฒนาเมืองเชียงใหม่ให้เป็นเมืองท่องเที่ยวอัจฉริยะต้นแบบให้แก่เมือง
ท่องเที่ยวเมืองต่าง ๆ โดยเจาะกลุ่มเป้าหมายหลักเป็นนักท่องเที่ยว เจ้าของกิจการขนาดเล็ก SME โดยพัฒนาเป็นแอปพลิเคชันให้นักท่องเที่ยวได้ใช้งาน
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
        <div className="contactBanner__wrapper">
          <h5 className="contactBanner__heading">
            <span className="orange">หน้าที่</span> :
            ดูแลภาพรวมโปรเจคและการทำงานของระบบ และพัฒนาแอพพลิเคชั่น 
          </h5>
          <p className="description">
          แอพพลิเคชั่นพัฒนาด้วยภาษา Kotlin และ การดึง api ด้านการท่องเที่ยวต่างๆมาใช้ เช่น google map api 
          </p>
        </div>
        </div>
      </div>

      <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true
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
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
          <img
          src={CmImg1}
          className="swipe__img"
          style={{ borderRadius: '8px' }}
          alt=""
        />
          </SwiperSlide>
          <SwiperSlide>
          <img
          src={CmImg2}
          className="swipe__img"
          style={{ borderRadius: '8px' }}
          alt=""
        />
          </SwiperSlide>
          <SwiperSlide>
          <img
          src={CmImg3}
          className="swipe__img"
          style={{ borderRadius: '8px' }}
          alt=""
        />
          </SwiperSlide>
          <SwiperSlide>
          <img
          src={CmImg4}
          className="swipe__img"
          style={{ borderRadius: '8px' }}
          alt=""
        />
          </SwiperSlide>
          <SwiperSlide>
          <img
          src={CmImg5}
          className="swipe__img"
          style={{ borderRadius: '8px' }}
          alt=""
        />
          </SwiperSlide>
          <SwiperSlide>
          <img
          src={CmImg6}
          className="swipe__img"
          style={{ borderRadius: '8px' }}
          alt=""
        />
          </SwiperSlide>
          <SwiperSlide>
          <img
          src={CmImg7}
          className="swipe__img"
          style={{ borderRadius: '8px' }}
          alt=""
        />
          </SwiperSlide>
          
          
        </Swiper>

      
       

        

      </div>
    </CmStyle>
  );
}
