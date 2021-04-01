import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// React Icons
import { GiPowerGenerator } from 'react-icons/gi';

// Button Import
import { Button } from '../../ButtonElement';

// Characters.jsx Import
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from './characters';

// Message.jsx Import
import { COPY_SUCCESS } from './message';

import {
  PasswordContainer,
  PasswordWrapper,
  PasswordRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  PasswordGen,
  ContainerGen,
  Generator,
  GeneratorHeader,
  InfoHeader,
  InfoHeaderH4,
  GeneratorPassword,
  CopyBtn,
  BtnWrap,
  ArrowDown,
  ArrowRight,
  FormGroup,
  GeneratorBtn,
  PasswordStrength,
  UppercaseLetters,
  LowercaseLetters,
  IncludeNumbers,
  IncludeSymbols,
} from './GeneratorElements';

function PasswordGenerator() {
  // Vars
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(20);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  // Generate Password aFunction
  const handleGeneratePassword = (e) => {
    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
      notify('Selecteer minimaal 1 optie', true);
    }
    let characterList = '';

    if (includeLowercase) {
      characterList = characterList + lowerCaseLetters;
    }

    if (includeUppercase) {
      characterList = characterList + upperCaseLetters;
    }

    if (includeNumbers) {
      characterList = characterList + numbers;
    }

    if (includeSymbols) {
      characterList = characterList + specialCharacters;
    }

    setPassword(createPassword(characterList));
  };

  // Loops
  const createPassword = (characterList) => {
    let password = '';
    const characterListLength = characterList.length;

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  };

  // CtC
  const copyToClipboard = () => {
    const newTextArea = document.createElement('textarea');
    newTextArea.innerText = password;
    document.body.appendChild(newTextArea);
    newTextArea.select();
    document.execCommand('copy');
    newTextArea.remove();
  };

  // Alert message
  const notify = (message, hasError = false) => {
    if (hasError) {
      toast.error(message, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast(message, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  // Copy Handler
  const handleCopyPassword = (e) => {
    if (password !== '') {
      copyToClipboard();
      notify(COPY_SUCCESS);
    }
  };

  // Hover
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <PasswordContainer>
        <PasswordWrapper>
          <PasswordRow>
            <Column1>
              <TextWrapper>
                <TopLine>onhackbaar</TopLine>
                <Heading>Wachtwoord generator</Heading>
                <SubTitle>
                  Met deze Wachtwoord Generator kunt U eenvoudig sterke wachtwoorden generenen. Vink
                  jouw favoriete criteria aan en druk op 'Genereer wachtwoord' om uw eigen
                  wachtwoord te generenen.
                </SubTitle>
                <BtnWrap>
                  <Button
                    to='checker'
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    smooth={true}
                    offset={-60}
                    primary={true}
                    dark={true}
                  >
                    Check uw wachtwoord {hover ? <ArrowDown /> : <ArrowRight />}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <PasswordGen>
                <ContainerGen>
                  <Generator>
                    <GeneratorHeader></GeneratorHeader>
                    <InfoHeader>
                      <InfoHeaderH4>
                        <GiPowerGenerator />
                      </InfoHeaderH4>
                    </InfoHeader>
                    <GeneratorPassword>
                      <h5>{password}</h5>
                      <CopyBtn onClick={handleCopyPassword}>
                        <i className='far fa-copy'></i>
                      </CopyBtn>
                    </GeneratorPassword>
                    <FormGroup>
                      <PasswordStrength>Wachtwoord Lengte (max 20)</PasswordStrength>
                      <input
                        defaultValue={passwordLength}
                        onChange={(e) => setPasswordLength(e.target.value)}
                        type='number'
                        id='password-strength'
                        name='password-strength'
                        maxLength='2'
                        max='20'
                        min='5'
                      />
                    </FormGroup>
                    <FormGroup>
                      <UppercaseLetters>Hoofdletters</UppercaseLetters>
                      <input
                        className='checkbox'
                        checked={includeUppercase}
                        onChange={(e) => setIncludeUppercase(e.target.checked)}
                        type='checkbox'
                        id='uppercase-letters'
                        name='uppercase-letters'
                      />
                    </FormGroup>
                    <FormGroup>
                      <LowercaseLetters>Kleine Letters</LowercaseLetters>
                      <input
                        checked={includeLowercase}
                        onChange={(e) => setIncludeLowercase(e.target.checked)}
                        type='checkbox'
                        id='lowercase-letters'
                        name='lowercase-letters'
                      />
                    </FormGroup>
                    <FormGroup>
                      <IncludeNumbers>Getallen</IncludeNumbers>
                      <input
                        checked={includeNumbers}
                        onChange={(e) => setIncludeNumbers(e.target.checked)}
                        type='checkbox'
                        id='include-numbers'
                        name='include-numbers'
                      />
                    </FormGroup>
                    <FormGroup>
                      <IncludeSymbols>Tekens</IncludeSymbols>
                      <input
                        checked={includeSymbols}
                        onChange={(e) => setIncludeSymbols(e.target.checked)}
                        type='checkbox'
                        id='include-symbols'
                        name='include-symbols'
                      />
                    </FormGroup>
                    <GeneratorBtn onClick={handleGeneratePassword}>
                      Genereer Wachtwoord
                    </GeneratorBtn>
                    <ToastContainer
                      position='top-center'
                      autoClose={5000}
                      hideProgressBar={false}
                      newestOnTop={false}
                      closeOnClick
                      rtl={false}
                      pauseOnFocusLoss
                      draggable
                      pauseOnHover
                    />
                  </Generator>
                </ContainerGen>
              </PasswordGen>
            </Column2>
          </PasswordRow>
        </PasswordWrapper>
      </PasswordContainer>
    </>
  );
}

export default PasswordGenerator;
