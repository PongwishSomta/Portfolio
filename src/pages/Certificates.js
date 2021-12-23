/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CertificateItem from '../components/CertificateItem';
import PText from '../components/PText';
import SectionTitle from '../components/SectionTitle';
import CertificatesInfo from '../assets/data/certificates';

const CertificateStyle = styled.div`
  padding: 10rem 0;
  .certificates__allItem {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }

  @media only screen and (max-width: 768px) {
  }
`;

export default function Memo() {
  const [certificatesData, setCertificatesData] = useState(CertificatesInfo);

  return (
    <CertificateStyle>
      <div className="container">
        <SectionTitle
          heading="CERTIFICATES"
          subheading="ประกาศนียบัตรทั้งหมด"
        />

        <div className="certificates__allItem">
          {certificatesData.map((item) => (
            <CertificateItem key={item.id} 
            img={item.img} 
            title={item.title} 
            desc={item.desc} 
            />
          ))}
        </div>
      </div>
    </CertificateStyle>
  );
}
