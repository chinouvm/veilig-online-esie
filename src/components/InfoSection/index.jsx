import React from 'react';

// React Icons
import { GiFishingPole } from 'react-icons/gi';
import { RiVirusLine } from 'react-icons/ri';
import { RiBugFill } from 'react-icons/ri';
import { BsNewspaper } from 'react-icons/bs';
import { HiShieldExclamation } from 'react-icons/hi';

import {
  Cards,
  CardsH1,
  CardsContainer,
  CardsWrapper,
  CardsItems,
  CardsItem,
  CardsItemLink,
  CardsIcon,
  CardsItemInfo,
  CardsItemH1,
  CardsItemP,
} from './InfoSection';

const InfoSection = () => {
  return (
    <Cards id='info'>
      <CardsH1>Lees meer over de gevaren van het internet.</CardsH1>
      <CardsContainer>
        <CardsWrapper>
          <CardsItems>
            <CardsItem>
              <CardsItemLink to='/phishing'>
                <CardsIcon>
                  <GiFishingPole />
                </CardsIcon>
                <CardsItemInfo>
                  <CardsItemH1>Phishing</CardsItemH1>
                  <CardsItemP>
                    Tegenwoordig zijn veel mensen slachtoffer van een phishing attack. Wilt u
                    voorbereid zijn op deze aanval en er meer over te weten komen? Klik dan hier.
                  </CardsItemP>
                </CardsItemInfo>
              </CardsItemLink>
            </CardsItem>
            <CardsItem>
              <CardsItemLink to='/malware'>
                <CardsIcon>
                  <RiBugFill />
                </CardsIcon>
                <CardsItemInfo>
                  <CardsItemH1>Malware</CardsItemH1>
                  <CardsItemP>
                    Malware. Een ruim begrip met een nog ruimere lijst van slachtoffers. Lees meer
                    over malware en hoe u kunt zorgen dat u er geen slachtoffer van wordt.
                  </CardsItemP>
                </CardsItemInfo>
              </CardsItemLink>
            </CardsItem>
          </CardsItems>
          <CardsItems>
            <CardsItem>
              <CardsItemLink to='/nepnieuws'>
                <CardsIcon>
                  <BsNewspaper />
                </CardsIcon>
                <CardsItemInfo>
                  <CardsItemH1>Nepnieuws</CardsItemH1>
                  <CardsItemP>
                    Het meest onderschatte probleem van onze huidige maatschappij. Kunt u nepnieuws
                    herkennen?
                  </CardsItemP>
                </CardsItemInfo>
              </CardsItemLink>
            </CardsItem>
            <CardsItem>
              <CardsItemLink to='/virussen'>
                <CardsIcon>
                  <RiVirusLine />
                </CardsIcon>
                <CardsItemInfo>
                  <CardsItemH1>Virussen</CardsItemH1>
                  <CardsItemP>
                    Het meest voorkomende probleem. Virussen. U heeft er misschien wel van gehoord
                    maar wat is het nu precies?
                  </CardsItemP>
                </CardsItemInfo>
              </CardsItemLink>
            </CardsItem>
            <CardsItem>
              <CardsItemLink to='/meer-gevaren'>
                <CardsIcon>
                  <HiShieldExclamation />
                </CardsIcon>
                <CardsItemInfo>
                  <CardsItemH1>Meer gevaren</CardsItemH1>
                  <CardsItemP>Lees hier over meer gevaren die u tegen kunt komen.</CardsItemP>
                </CardsItemInfo>
              </CardsItemLink>
            </CardsItem>
          </CardsItems>
        </CardsWrapper>
      </CardsContainer>
    </Cards>
  );
};

export default InfoSection;
