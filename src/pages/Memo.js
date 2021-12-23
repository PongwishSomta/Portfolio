/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import SectionTitle from '../components/SectionTitle';
import MemoImg from '../assets/images/memo1.jpeg';

const MemoStyle = styled.div`
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
  }
  .project__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
    border-radius: 20px;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
  }
`;

export default function Memo() {
  return (
    <MemoStyle>
      <div className="container">
        <SectionTitle heading="MEMO" subheading="ระบบดูแลผู้ป่วยอัลไซเมอร์" />

        <img src={MemoImg} className='project__img' style={{ borderRadius: '20px' }} alt='' />
        <div className="project__info">
          <h2 className="project__heading">MEMO คืออะไร?</h2>

          <PText>
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
          <h2 className="project__heading">จุดประสงค์ในการพัฒนา</h2>

          <PText>
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
      </div>
    </MemoStyle>
  );
}
