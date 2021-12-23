/* eslint-disable prettier/prettier */
import React from 'react';
import { RiFilePaper2Fill } from 'react-icons/ri';
import styled from 'styled-components';
import CertificateImg from '../assets/images/cer1.jpg';

const CertificateItemStyles = styled.div`
  border-radius: 9px;
 

  .certificate__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    
    img {
      height: 100%;
    }
  }

  .certificateItem__title {
    font-size: 2.2rem;
    font-family: "IBM Bold";
    color: var(--orange);
  }
  .certificateItem_desc {
    font-size: 1.6rem;
  }
  .certificateItem__icon {
    svg {
      width: 3rem;
      fill: var(--orange);
    }
  }
  @media only screen and (max-width: 768px) {
    .certificateItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({ 
    img = CertificateImg,
    title = '',
    desc = '' 
}) {
  return (
    <CertificateItemStyles>
      <div className="certificate__img">
        <img src={img} style={{ borderRadius: '10px' }} alt="img" />
      </div>

      <h3 className="certificateItem__title">
        <span className="certificateItem__icon">
          <RiFilePaper2Fill />
        </span>
        &nbsp;
        {title}
      </h3>
      <p className="certificateItem_desc">
        {desc}
      </p>
    </CertificateItemStyles>
  );
}
