import React, { useState } from 'react';
import { Button } from '../ButtonElement';
import {
  HeroContainer,
  HeroWrapper,
  HeroRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  BtnWrap,
  ImgWrap,
  Img,
  ArrowDown,
  ArrowRight,
} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HeroContainer id="home">
        <HeroWrapper>
          <HeroRow>
            <Column1>
              <TextWrapper>
                <TopLine>online Veiligheid</TopLine>
                <Heading>Veilig met Esie</Heading>
                <SubTitle>
                  Met Esie leert u alles over de gevaren die opduiken als u op
                  het web surft, niet alleen leert u de gevaren te herkennen
                  maar ook wat u er tegen kunt doen
                </SubTitle>
                <BtnWrap>
                  <Button
                    to="info"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    smooth={true}
                    offset={-60}
                  >
                    Begin {hover ? <ArrowDown /> : <ArrowRight />}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img
                  src={process.env.PUBLIC_URL + '/images/herobg.svg'}
                  type="image/svg+xml"
                  alt="image"
                />
              </ImgWrap>
            </Column2>
          </HeroRow>
        </HeroWrapper>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
