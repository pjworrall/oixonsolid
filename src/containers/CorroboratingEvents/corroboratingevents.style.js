import styled from 'styled-components';
import { media } from '../../utils';

export const CorroboratingEventsWrapper = styled.section`
  width: 100%;
  background-image: url('/img/concentric-hex-pattern_2x.png');
  background-repeat: repeat;
  padding: 50px 0;

  h3 {
    color: #666666;
    span {
      font-weight: bold;
    }
    a {
      font-size: 1.9rem;
    }
  }
`;

export const CorroboratingEventsCard = styled.div`
  background-color: #fff;
  margin: 30px auto;

  //Overriding the style guide card flexbox settings
  max-width: 80% !important;
  flex-direction: row !important;
  padding: 50px 0 !important; //temporary fix to a style guide bug

  align-items: center;

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    margin-left: 8px;
  }

`;

export const CorroboratingEventsLogo = styled.div`
  width: 50%;
  height: 100%;

  img {
    width: 60%;
    display: block;
    margin: 0 auto;
  }
`;

export const CorroboratingEventsProfile = styled.div`
  height: 100%;
  text-align: center;
  position: relative;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }

  h1,
  img {
    margin: 0 10px;
    display: inline-block;
    vertical-align: middle;
  }

  ${media.tablet`
    width: 50%;
    &:after {
      display: block;
      content: "";
      position: absolute;
      height: 100%;
      width: 1px;
      background-color:#D0D0D0;
      top:0;
    }
  `}
`;

export const Button = styled.button`
    max-width: 128px;
    display: inline-block;

    &:first-child {
        margin-right: 10px;
    }
`;

export const CorroboratingEventsDetail = styled.div`
  padding: 1rem 3.5rem;

  p,
  li {
    color: #666666;
  }
  ul {
    list-style: disc;
    margin: 0 18px;
  }
`;
