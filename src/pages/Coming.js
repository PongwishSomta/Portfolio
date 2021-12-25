/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import CatImg from '../assets/images/cat1.gif';
import ContactBanner from '../components/ContactBanner';

const ComingStyle = styled.div`
  padding: 10rem 0;
  .container{
  }
  .title{
    font-family: 'Montserrat Bold';
    font-size:70px;
    color: var(--orange);
  }
  .subtitle{
    font-family: 'IBM Regular';
      font-size:20px;
      margin-bottom: 15rem;
  }
  .cat__img{
      margin-top: 15rem;
      width: 500px;
  }
  @media only screen and (max-width: 768px) {
  }
`;

export default function Coming() {
  return (
    <ComingStyle>
      <div className="container">
          <p align='center'>

          <img src={CatImg} className='cat__img' alt='cat' />
          </p>
        <h1 className='title' align="center">UNDER <br/> CONSTRUCTION</h1>
        <p className='subtitle'  align="center">กำลังอยู่ในระหว่างการพัฒนา</p>
       
      </div>
      <ContactBanner />
    </ComingStyle>
  );
}
