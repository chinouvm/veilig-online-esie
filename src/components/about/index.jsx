import React from 'react';
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  ImgWrap,
  Img,
} from './AboutElements';

const About = () => {
  return (
    <>
      <AboutContainer id="over-ons">
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <TextWrapper>
                <TopLine>ons project</TopLine>
                <Heading>Over ons</Heading>
                <SubTitle>
                  Wij zijn drie scholieren van de middelbare school die een
                  website en app gemaakt hebben met als doel de gevaren van het
                  internet duidelijk te maken. Eventuele vragen kunnen gesteld
                  worden via de live-chat functie rechtsonder in de hoek van de
                  pagina.
                </SubTitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img
                  src={process.env.PUBLIC_URL + '/images/about.svg'}
                  type="image/svg+xml"
                  alt="image"
                />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
