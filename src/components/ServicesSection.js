/* eslint-disable prettier/prettier */
import React from 'react';
import { MdDesktopMac,  MdPhonelinkSetup } from 'react-icons/md';
import { SiBlockchaindotcom } from 'react-icons/si';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="สิ่งที่ผมสนใจ" heading="Interested" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="web dev"
            desc="I do ui/ux design for the website that helps website to get a unique look."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="app dev"
            desc="I develop mobile application. I create mobile app with eye catching ui."
          />
          <ServicesSectionItem
            icon={<SiBlockchaindotcom />}
            title="blockchain"
            desc="I would like to study and develop a blockchain system that can be used by the general public. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
