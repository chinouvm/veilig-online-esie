import React, { Component } from 'react';
import HIBPPasswordChecker from 'react-have-i-been-pwned';

// React Icons
import { AiFillCheckCircle } from 'react-icons/ai';

import {
  PwndContainer,
  PwndWrapper,
  PwndRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  Checker,
  OutputMessage,
  CounterMessage,
  ConChecker,
  CheckerName,
  Input,
  LinkMessage,
} from './PwndElements';

class Pwnd extends Component {
  // Pwnd Api POST
  state = {
    password: '',
  };
  handleChange = (ev) => {
    this.setState({
      password: ev.target.value,
    });
  };
  render() {
    const { password } = this.state;
    return (
      <PwndContainer id='pwnd'>
        <PwndWrapper>
          <PwndRow>
            <Column1>
              <TextWrapper>
                <TopLine>datalekken</TopLine>
                <Heading>Datalek checker </Heading>
                <SubTitle>
                  Tegenwoordig gebeuren er veel datalekken waarbij privégegevens van nietswetende
                  burgers vrijkomen op het hele internet. Check hier of uw wachtwoord in zo'n
                  datalek is vrijgekomen, zoja dan ziet u maar weer hoe belangrijk het is om
                  meerdere wachtwoorden te hebben!
                </SubTitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ConChecker>
                <CheckerName>
                  <AiFillCheckCircle />
                </CheckerName>
                <Input
                  type='password'
                  onChange={this.handleChange}
                  value={password}
                  placeholder='Wachtwoord'
                />
                <Checker>
                  <HIBPPasswordChecker password={password}>
                    {({ initial, loading, error, pwned, count }) => {
                      // PWND API
                      if (initial) return null;
                      if (loading) return 'Laden';
                      if (error) return `error: ${error}`;
                      if (!pwned) return <>Dit wachtwoord is veilig voor gebruik</>;
                      if (pwned)
                        return (
                          <>
                            <OutputMessage>Dit wachtwoord is niet meer veilig!</OutputMessage>
                            <CounterMessage>
                              We hebben uw wachtwoord gevonden in:{' '}
                              <strong>{count.toLocaleString()} datalekken.</strong> Maar maakt u
                              zich hier niet druk om, dit betekend niet dat iedereen uw accounts kan
                              gebruiken!{' '}
                            </CounterMessage>
                            <LinkMessage
                              href='https://haveibeenpwned.com/FAQs#DataSource'
                              rel='noopener noreferrer'
                              target='_blank'
                            >
                              Meer informatie
                            </LinkMessage>
                          </>
                        );
                    }}
                  </HIBPPasswordChecker>
                </Checker>
              </ConChecker>
            </Column2>
          </PwndRow>
        </PwndWrapper>
      </PwndContainer>
    );
  }
}

export default Pwnd;
