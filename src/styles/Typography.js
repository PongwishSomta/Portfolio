import { createGlobalStyle } from 'styled-components';
import RobotoMonoRegular from '../assets/fonts/RobotoMono-Regular.ttf';
import RobotoBold from '../assets/fonts/Roboto-Bold.ttf';
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';
import IBMPlexRegular from '../assets/fonts/IBMPlexSansThai-Regular.ttf';
import IBMPlexBold from '../assets/fonts/IBMPlexSansThai-Bold.ttf';

const Typography = createGlobalStyle`
@font-face {
  font-family: 'RobotoMono Regular';
  src: url(${RobotoMonoRegular});
  font-style: normal;
}
@font-face {
  font-family: 'Roboto Bold';
  src: url(${RobotoBold});
  font-style: bold;
}
  @font-face {
    font-family: 'Montserrat SemiBold';
    src: url(${MontserratSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Montserrat Bold';
    src: url(${MontserratBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'IBM Regular';
    src: url(${IBMPlexRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'IBM Bold';
    src: url(${IBMPlexBold});
    font-style: bold;
  }
  html{
    font-family: 'IBM Regular';
    color: var(--gray-1);
  }
  *{
    font-family: 'IBM Regular';
    color: var(--gray-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Montserrat SemiBold'
  }
  
`;

export default Typography;
