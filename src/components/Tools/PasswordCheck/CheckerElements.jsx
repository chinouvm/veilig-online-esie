import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';

export const PasswordCheckerContainer = styled.div`
  color: #000;
  background: #fff;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const PasswordCheckerWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 451px) {
    height: 700px;
  }

  @media screen and (orientation: landscape) {
    height: ${isMobile ? '220vh' : '100vh'};
  }
`;

export const PasswordCheckerRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 768px) {
    grid-template-areas:
      'col2 col2'
      'col1 col1';
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ArrowDown = styled(MdKeyboardArrowDown)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
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
  color: #000;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #000;
`;

export const ContainerCheck = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #010606;
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

export const CheckerName = styled.div`
  padding-bottom: 20px;
  padding-top: 10px;
  font-size: 75px;
  color: #01bf71;
`;

export const ProgressBar = styled.div`
  width: 200px;
`;

export const Progress = styled.div``;

export const Input = styled.input`
  border-style: none;
  background-color: #e5e5e5;
  font-weight: bold;
  padding: 20px;
`;

export const P = styled.p`
  @media screen and (max-width: 450px) {
    text-align: center;
  }
`;

export const CheckerInput = styled.div``;

export const ProgressText = styled.div``;

export const CheckerMeterDiv = styled.div``;
