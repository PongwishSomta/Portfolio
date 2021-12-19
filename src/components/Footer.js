/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--new-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1"> 
          <h1 className="footer__col1__title">Pongwish Somta</h1>
          <PText>
          ผมมีความคิดที่อยากจะสร้างเทคโนโลยีที่สามารถเปลี่ยนแปลงโลกให้มีความทันสมัยมากยิ่งขึ้น ยิ่งศึกษายิ่งสนุกและทำให้ผมอยากเรียนรู้ทางด้านนี้ต่อไปอย่างไม่มีที่สิ้นสุด

          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '0936080909',
                path: 'tel:0815302047',
              },
              {
                title: 'pongwish.so@gmail.com',
                path: 'mailto:pongwish.so@gmail.com',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="social Links"
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/profile.php?id=100017968987340',
              },
              {
                title: 'Github',
                path: 'https://github.com/PongwishSomta',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 Copyright - Pongwish Somta  {' '}
            {/* <a target="_blank" rel="noreferrer" href="http://webcifar.com">
              web cifar
            </a>{' '}
          */}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
