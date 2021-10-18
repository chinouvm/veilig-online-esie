import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

export const PwndContainer = styled.div`
 background: #010606;

 @media screen and (max-width: 768px) {
  padding-top: 100px;
  padding-bottom: 100px;
 }
`;

export const PwndWrapper = styled.div`
 display: grid;
 z-index: 1;
 width: 100%;
 max-width: 1100px;
 height: 100vh;
 margin-right: auto;
 margin-left: auto;
 padding: 0 24px;
 justify-content: center;

 @media screen and (max-width: 451px) {
  height: 875px;
  padding: 0;
 }

 @media screen and (orientation: landscape) {
  height: ${isMobile ? '230vh' : '100vh'};
 }
`;

export const PwndRow = styled.div`
 display: grid;
 grid-auto-columns: minmax(auto, 1fr);
 align-items: center;
 grid-template-areas: 'col1 col2';

 @media screen and (max-width: 768px) {
  grid-template-areas:
   'col1 col1'
   'col2 col2';
 }
`;

export const Column1 = styled.div`
 margin-bottom: 15px;
 padding: 0 15px;
 grid-area: col1;
`;

export const Column2 = styled.div`
 margin-bottom: 15px;
 grid-area: col2;
`;

export const TextWrapper = styled.div`
 max-width: 540px;
 padding-top: 0;
 padding-bottom: 60px;
`;

export const TopLine = styled.p`
 color: #01bf71;
 font-size: 16px;
 line-height: 16px;
 font-weight: 700;
 letter-spacing: 1.4px;
 text-transform: uppercase;
 margin-bottom: 16px;
`;

export const Heading = styled.h1`
 margin-bottom: 24px;
 font-size: 48px;
 line-height: 1.1;
 font-weight: 600;
 color: #fff;

 @media screen and (max-width: 480px) {
  font-size: 32px;
 }
`;

export const SubTitle = styled.p`
 max-width: 440px;
 margin-bottom: 35px;
 font-size: 18px;
 line-height: 24px;
 color: #fff;
`;

export const Checker = styled.div``;

export const ConChecker = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 background-color: #fff;
 width: 400px;
 margin: auto;
 border-radius: 15px;
 padding: 20px;
 padding-bottom: 10px;
 color: #000;
 font-weight: bold;
 margin-top: 40px;
 margin-bottom: 40px;

 @media screen and (max-width: 450px) {
  width: 90%;
 }
`;

export const OutputMessage = styled.div`
 color: #000;
 text-align: center;
`;

export const CounterMessage = styled.div`
 color: #000;
 padding-bottom: 10px;
 text-align: center;
`;

export const CheckerName = styled.div`
 padding-bottom: 20px;
 padding-top: 10px;
 font-size: 75px;
 color: #01bf71;
`;

export const Input = styled.input`
 border-style: none;
 background-color: #e5e5e5;
 font-weight: bold;
 padding: 20px;
 margin-bottom: 30px;
`;

export const LinkMessage = styled.a`
 display: flex;
 color: #000;
 align-items: center;
 justify-content: center;

 :hover {
  color: #01bf71;
 }
`;
