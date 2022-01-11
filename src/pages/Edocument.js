/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';



import 'swiper/swiper-bundle.min.css';



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
      <SectionTitle heading="E-DOCUMENT" subheading="ระบบเอกสารอัจฉริยะ" />
       
      </div>
    </CmStyle>
  );
}
