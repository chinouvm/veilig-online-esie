import React, { useState } from 'react';
import CheckerMeter from './CheckerMeter';

// React Icons
import { AiFillCheckCircle } from 'react-icons/ai';
import { Button } from '../../ButtonElement';

import {
  PasswordCheckerContainer,
  PasswordCheckerWrapper,
  PasswordCheckerRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  ContainerCheck,
  CheckerName,
  CheckerInput,
  Input,
  CheckerMeterDiv,
  BtnWrap,
  ArrowDown,
  ArrowRight,
} from './CheckerElements';

function Checker() {
  const [passwordCheck, setPassword] = useState('');
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <PasswordCheckerContainer id='checker'>
        <PasswordCheckerWrapper>
          <PasswordCheckerRow>
            <Column1>
              <ContainerCheck>
                <CheckerName>
                  <AiFillCheckCircle />
                </CheckerName>
                <CheckerInput>
                  <Input
                    type='password'
                    placeholder='Wachtwoord'
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </CheckerInput>
                <CheckerMeterDiv>
                  <CheckerMeter passwordCheck={passwordCheck} />
                </CheckerMeterDiv>
              </ContainerCheck>
            </Column1>
            <Column2>
              <TextWrapper>
                <TopLine>veiligheid</TopLine>
                <Heading>Wachtwoord checker</Heading>
                <SubTitle>
                  Check hier of uw wachtwoord sterk is en wat u eventueel kunt aanpassen om het
                  sterker te maken.
                </SubTitle>
                <BtnWrap>
                  <Button
                    to='pwnd'
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    smooth={true}
                    offset={-60}
                  >
                    Datalek check {hover ? <ArrowDown /> : <ArrowRight />}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column2>
          </PasswordCheckerRow>
        </PasswordCheckerWrapper>
      </PasswordCheckerContainer>
    </>
  );
}

export default Checker;
