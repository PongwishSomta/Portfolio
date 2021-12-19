/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import PongwishImg from '../assets/images/pongwish.png';
import Button from './Button';
import SocialMediaArrow from '../assets/images/social-media-arrow.png';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.png';
import PText from './PText';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-family: "Montserrat Bold";
      font-size: 7rem;
      color: var(--orange);
      text-shadow: -0.8px -0.8px 0 #000, 0.8px -0.8px 0 #000,
        -0.8px 0.8px 0 #000, 0.8px 0.8px 0 #000;
    }
  }
  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
    border-radius: 20px;
  }
  .hero__info {
    margin-top: -18rem;
  }
  .hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;

    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator,
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

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1.6rem;
          transform: rotate(-90deg);
          letter-spacing: 5px;
          margin-bottom: 2rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }

  .white {
    font-family: "IBM Bold";
    color: var(--new-bg);
  }
  .caption {
    text-shadow: -0.8px -0.8px 0 #262626, 0.8px -0.8px 0 #262626,
      -0.8px 0.8px 0 #262626, 0.8px 0.8px 0 #262626;
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, This is</span>
            <span className="hero__name">Pongwish Somta</span>
          </h1>
          <div className="hero__img">
            <img src={PongwishImg} style={{ borderRadius: '20px' }} alt="" />
          </div>
          <div className="hero__info">
            <div className="caption">
              <PText>
                <span className="white">
                  ผมมีความคิดที่อยากจะสร้างเทคโนโลยีที่สามารถเปลี่ยนแปลงโลกให้มีความทันสมัยมากยิ่งขึ้น
                  ยิ่งศึกษายิ่งสนุกและทำให้ผมอยากเรียนรู้ทางด้านนี้ต่อไปอย่างไม่มีที่สิ้นสุด
                </span>
              </PText>
            </div>

            <Button btnText="see my works" btnLink="/projects" />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="icon" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100017968987340"
                    target="_blank"
                    rel="noreferrer"
                  >
                    FB
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/PongwishSomta"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GH
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDown Arrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
