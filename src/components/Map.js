import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map1.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>Yupparaj Wittayalai School, Chiang mai, Thailand</PText>
          <a
            className="map__card__link"
            href="https://www.google.co.th/maps/place/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%A2%E0%B8%B8%E0%B8%9E%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2/@18.7910805,98.9877456,18z/data=!4m5!3m4!1s0x30da3a9830806b95:0xc08c7caffa89adf2!8m2!3d18.7909072!4d98.9880286"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
