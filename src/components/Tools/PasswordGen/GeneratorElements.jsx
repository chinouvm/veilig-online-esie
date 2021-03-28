import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';

export const PasswordContainer = styled.div`
  color: #000;
  background: #010606;

  @media screen and (max-width: 768px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
`;

export const PasswordWrapper = styled.div`
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
    height: ${isMobile ? '240vh' : '100vh'};
  }
`;

export const PasswordRow = styled.div`
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

export const PasswordGen = styled.div`
  background: #010606;
`;

export const ContainerGen = styled.div`
  width: 400px;
  margin: 0 auto;
  padding-top: 20px;

  @media screen and (max-width: 450px) {
    width: 90%;
  }
`;

export const Generator = styled.div`
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.2);
  padding: 20px;
`;

export const GeneratorHeader = styled.h2`
  text-align: center;
  color: #000;
  margin-bottom: 20px;
`;

export const InfoHeader = styled.div`
  color: #000;
  text-align: center;
  padding-bottom: 15px;
`;

export const InfoHeaderH4 = styled.h4`
  font-size: 70px;
  color: #01bf71;
`;

export const GeneratorPassword = styled.div`
  position: relative;
  background: #e5e5e5;
  padding: 13px 10px;
  color: rgb(0, 0, 0);
  height: 46px;
  margin-bottom: 15px;
  text-align: center;
`;

export const CopyBtn = styled.button`
  position: absolute;
  border: none;
  padding: 10px;
  cursor: pointer;
  top: 3px;
  right: 3px;

  :hover {
    background: #01bf71;
  }
`;

export const GeneratorBtn = styled.button`
  background: #010606;
  border: none;
  border-radius: 15px;
  display: block;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-size: 17px;
  cursor: pointer;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  transition: all 0.2s ease-in-out;

  :hover {
    transition: all 0.2s ease-in-out;
    background: #01bf71;
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

export const FormGroup = styled.div`
  display: flex;
  justify-content: space-between;
  color: #000;
  margin-bottom: 15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  font-size: large;
`;

export const PasswordStrength = styled.label``;

export const UppercaseLetters = styled.label``;

export const LowercaseLetters = styled.label``;

export const IncludeNumbers = styled.label``;

export const IncludeSymbols = styled.label``;
