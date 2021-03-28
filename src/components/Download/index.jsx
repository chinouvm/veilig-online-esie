import React from 'react';
import {
  DownloadContainer,
  DownloadWrapper,
  DownloadRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  BtnWrap,
  BtnWrapApple,
  BtnWrapAndroid,
  Button,
  ImgWrap,
  Img,
} from './DownloadElements';

const Download = () => {
  return (
    <>
      <DownloadContainer>
        <DownloadWrapper>
          <DownloadRow>
            <Column1>
              <TextWrapper>
                <TopLine>vlekkeloze ervaring</TopLine>
                <Heading>Download</Heading>
                <SubTitle>
                  Download hier de app voor op uw telefoon voor een betere leer
                  ervaring 'on the go'.
                </SubTitle>
                <BtnWrap>
                  <BtnWrapApple>
                    <Button>
                      IOS <i class="fab fa-apple Icon" />
                    </Button>
                  </BtnWrapApple>
                  <BtnWrapAndroid>
                    <Button>
                      Android <i class="fab fa-android Icon" />
                    </Button>
                  </BtnWrapAndroid>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img
                  src={process.env.PUBLIC_URL + '/images/download2.svg'}
                  type="image/svg+xml"
                  alt="image"
                />
              </ImgWrap>
            </Column2>
          </DownloadRow>
        </DownloadWrapper>
      </DownloadContainer>
    </>
  );
};

export default Download;
