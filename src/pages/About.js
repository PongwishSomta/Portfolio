/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import styled from "styled-components";
import PText from "../components/PText";
import Button from "../components/Button";
import AboutImg from "../assets/images/pongwish1.png";
import AboutInfoItem from "../components/AboutInfoItem";
import ContactBanner from "../components/ContactBanner";
import ProgressBar from "../components/ProgressBar";


const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
    display: flex;
  }
  .about__info__item {
    margin-bottom: 10rem;
    flex: 6;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
    .about__info__items {
      display: block;
    }
    .title {
      font-size: 2rem;
    }
  }
  .skill {
    display: flex;
    margin-top: 13px;
  }
  .title {
    font-size: 2rem;
    font-family: "IBM Bold";
    margin-bottom: 0px;
    flex: 6;
  }
  .level {
    font-size: 1.8rem;
    font-family: "IBM Regular";
    flex: 6;
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Pongwish Somta</span>
              </p>
              <h2 className="about__heading">A passionate App developer</h2>
              <div className="about__info">
                <PText>
                  ผมเป็นเด็กยุคใหม่ที่โตมากับเทคโนโลยีและคอมพิวเตอร์ครั้งแรกที่ผมได้เริ่มใช้
                  คอมพิวเตอร์คือสมัยเรียนมัธยมศึกษาตอนต้น เล่นเกมเหมือนกับเด็ก ๆ
                  ทั่วไป วันหนึ่งผมมี โอกาสได้เห็นงานเปิดตัวการ์ดจอ
                  ซึ่งถือเป็นเทคโนโลยีที่ทำให้โลกเปลี่ยนแปลงเป็นอย่างมาก
                  ทำให้ผมเกิดความคิดที่อยากจะสร้างเทคโนโลยีที่เปลี่ยนแปลงโลกให้มีความทันสมัยมากยิ่งขึ้น
                  ผมจึงมีความสนใจศึกษาและได้เรียนรู้ด้านคอมพิวเตอร์มากยิ่งขึ้น
                  และการได้ศึกษา Computer Programming ทำให้ผมยิ่งชอบในด้านนี้มาก
                  <br /> <br />
                  ในด้าน Programming ผมมีความถนัดและชื่นชอบใน Mobile Application
                  Programming โดยผมได้มีการ พัฒนา ตัวแอปพลิเคชันด้วย Flutter
                  ซึ่งเป็นภาษาที่ใช้ในการพัฒนา Mobile Application และยังมีภาษา
                  Kotlin ที่เป็น Mobile Application Programming และยังมีการพัฒนา
                  Web Application ด้วย PHP และภาษาพื้นฐานในการProgramming ภาษา C
                  ในการพัฒนา แอปพลิเคชัน เว็บ และระบบต่าง ๆ
                  ทำให้ผมได้เรียนรู้เรื่อง Self Learning
                  หรือการเรียนรู้ด้วยตัวเองที่ในโรงเรียนไม่
                  ได้สอนในสิ่งที่ผมชอบและถนัด
                  และยังสอนให้ผมได้รู้เข้าในปัญหาหาของการลงมือทำจริง การวางแผน
                  การออกแบบ การปรับปรุงแก้ไข ต่าง ๆ ทำให้ผมได้เรียนรู้และเข้าใจ
                  Programing อย่างแท้จริง
                </PText>
              </div>
    
                <Button btnText="Download folio"  />
         
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>

          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="มัธยมตอนปลาย"
                items={["โรงเรียนยุพราชวิทยาลัย"]}
                link="https://www.yupparaj.ac.th/"
              />
              <AboutInfoItem
                title="มัธยมตอนต้น"
                items={["โรงเรียนยุพราชวิทยาลัย"]}
                link="https://www.yupparaj.ac.th/"
              />
              <AboutInfoItem
                title="ประถมศึกษา"
                items={["โรงเรียนอนุบาลเชียงใหม่"]}
                link="https://abcm.ac.th/"
              />
            </div>
            <div className="about__info__item">
              <h1
                className="about__info__heading"
                style={{ marginBottom: "30px" }}
              >
                My Skills
              </h1>

              <div className="skill">
                <div className="title" style={{color:"#0d1f33"}}>Adobe Photoshop</div>
                <div className="level" align="right">
                  Excellent
                </div>
              </div>

              <ProgressBar bgcolor="#0d1f33" completed="80" />

              <div className="skill">
                <div className="title" style={{color:"#54c4f0"}}>Flutter</div>
                <div className="level" align="right">
                  Very good
                </div>
              </div>

              <ProgressBar bgcolor="#54c4f0" completed="80" />

              <div className="skill">
                <div className="title" style={{color:"#b54298"}}>Kotlin</div>
                <div className="level" align="right">
                  Good
                </div>
              </div>

              <ProgressBar bgcolor="#b54298" completed="60" />

              <div className="skill">
                <div className="title" style={{color:"#6b7db7"}}>PHP</div>
                <div className="level" align="right">
                  Basic
                </div>
              </div>

              <ProgressBar bgcolor="#6b7db7" completed="50" />

              <div className="skill">
                <div className="title" style={{color:"#134680"}}>C</div>
                <div className="level" align="right">
                  Basic
                </div>
              </div>

              <ProgressBar bgcolor="#134680" completed="50" />

              <div className="skill">
                <div className="title" style={{color:"#fdd34b"}}>Python</div>
                <div className="level" align="right">
                  Basic
                </div>
              </div>

              <ProgressBar bgcolor="#fdd34b" completed="50" />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
