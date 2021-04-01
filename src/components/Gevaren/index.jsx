import React from 'react';

// Gaming Icons
import { GiRocket } from 'react-icons/gi';
import { GiShamblingZombie } from 'react-icons/gi';
import { GiTrojanHorse } from 'react-icons/gi';
import { GiEarthWorm } from 'react-icons/gi';
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
} from './GevarenElements';

const GevarenCards = () => {
  return (
    <Cards id='info'>
      <CardsH1>Overige gevaren die u tegen kunt komen.</CardsH1>
      <CardsContainer>
        <CardsWrapper>
          <CardsItems>
            <CardsItem>
              <CardsItemLink>
                <CardsIcon>
                  <i class='fas fa-user-secret'></i>
                </CardsIcon>
                <CardsItemInfo>
                  <CardsItemH1>Wat is spyware?</CardsItemH1>
                  <CardsItemP>
                    Spyware is software wat zich ongezien op uw computer installeert om uw
                    internetgedrag te analyseren en zo gepersonaliseerde spam te sturen die precies
                    inspeelt op uw gedrag. Via deze spam hopen de mensen die deze Spyware hebben
                    gemaakt uw gegevens te verkrijgen om dit vervolgens door te verkopen.
                  </CardsItemP>
                </CardsItemInfo>
                <CardsItemInfo>
                  <CardsItemH1>Wat kunt u er tegen doen?</CardsItemH1>
                  <CardsItemP>
                    U kunt uzelf beveiligen door een antivirus op uw computer te installeren of
                    zelfs internet security aan te schaffen. Verder is het belangrijk dat u deze
                    security dan ook regelmatig update zodat u veilig blijft.
                  </CardsItemP>
                </CardsItemInfo>
              </CardsItemLink>
            </CardsItem>
          </CardsItems>
          <CardsItems>
            <CardsItem>
              <CardsItemLink>
                <CardsIcon>
                  <i class='fas fa-lock'></i>
                </CardsIcon>
                <CardsItemInfo>
                  <CardsItemH1>Wat is ransomware?</CardsItemH1>
                  <CardsItemP>
                    Ransomware is een online chantagemethode door middel van malware. Ransomware is
                    een programma dat een computer (of gegevens die erop staan) blokkeert en
                    vervolgens van de gebruiker losgeld (=ransom) vraagt om de computer weer te
                    'bevrijden'.
                  </CardsItemP>
                </CardsItemInfo>
                <CardsItemInfo>
                  <CardsItemH1>Wat kunt u er tegen doen?</CardsItemH1>
                  <CardsItemP>
                    Ransomware kan veel problemen met zich meebrengen. Hoewel ransomware steeds
                    geavanceerder wordt, zijn er wel maatregelen die u kunt nemen om de risico's te
                    beperken. De beste manier is door zelf alert te blijven en altijd na te denken
                    voordat u een bestand download of een link aanklikt. En, houd uw programma's en
                    software up-to-date.
                  </CardsItemP>
                </CardsItemInfo>
              </CardsItemLink>
            </CardsItem>
          </CardsItems>
          <CardsItems>
            <CardsItem>
              <CardsItemLink>
                <CardsIcon>
                  <i class='fas fa-comments'></i>
                </CardsIcon>
                <CardsItemInfo>
                  <CardsItemH1>Wat is spam?</CardsItemH1>
                  <CardsItemP>
                    Spam is ongewenste e-mail die erop gericht is om u een product of dienst te
                    verkopen, zonder dat u er om gevraagd hebt.
                  </CardsItemP>
                </CardsItemInfo>
                <CardsItemInfo>
                  <CardsItemH1>Wat kunt u er tegen doen?</CardsItemH1>
                  <CardsItemP>
                    Spam is irritant maar niet direct gevaarlijk. Tegenwoordig bieden de meeste
                    e-mailproviders spamfilters aan op uw e-mail. Gebruik van dit soort filters
                    vangt al een hoop van de overbodige berichten af.
                  </CardsItemP>
                </CardsItemInfo>
              </CardsItemLink>
            </CardsItem>
          </CardsItems>
          <CardsItems>
            <CardsItem>
              <CardsItemLink>
                <CardsIcon>
                  <i class='fas fa-robot'></i>
                </CardsIcon>
                <CardsItemInfo>
                  <CardsItemH1>Wat is een botnet?</CardsItemH1>
                  <CardsItemP>
                    Een botnet is een groot aantal computers die allemaal door een virus zijn
                    geïnfecteerd. Botnets worden door criminelen gebruikt om, zonder dat de
                    gebruikers het weten, spam of virussen te versturen. Vaak hebt u als gebruiker
                    niet door dat uw computer deel uitmaakt van een botnet.
                  </CardsItemP>
                </CardsItemInfo>
                <CardsItemInfo>
                  <CardsItemH1>Wat kunt u er tegen doen?</CardsItemH1>
                  <CardsItemP>
                    Om te voorkomen dat uw eigen PC deel wordt van een botnet is het van belang een
                    antivirus- of internet security pakket te installeren. Hierbij is het belangrijk
                    dat dit pakket zeer regelmatig (automatisch) updates installeert. Er verschijnen
                    namelijk voortdurend nieuwe virussen en het pakket heeft de updates nodig om
                    deze te herkennen. Vertrouw nooit gratis antivirus-programma’s die zich spontaan
                    aanbieden op een website, vaak bevatten deze zelf virussen.
                  </CardsItemP>
                </CardsItemInfo>
              </CardsItemLink>
            </CardsItem>
          </CardsItems>
          <CardsItems>
            <CardsItem>
              <CardsItemLink>
                <CardsIcon>
                  <GiRocket />
                </CardsIcon>
                <CardsItemInfo>
                  <CardsItemH1>Wat is een DDoS?</CardsItemH1>
                  <CardsItemP>
                    Distributed denial-of-service aanvallen (DDoS-aanvallen) zijn pogingen om een
                    computer, computernetwerk of dienst onbruikbaar te maken voor de bedoelde
                    gebruiker. Bij een distributed dos-aanval voeren meerdere computers tegelijk de
                    aanval online uit. Hiervoor wordt vaak een botnet gebruikt, maar het kan ook
                    gaan om meerdere personen die hun acties coördineren.
                  </CardsItemP>
                </CardsItemInfo>
                <CardsItemInfo>
                  <CardsItemH1>Wat kunt u er tegen doen?</CardsItemH1>
                  <CardsItemP>
                    U kunt hier vrij weinig tegen doen maar de kans dat dit bij u gebeurt is enorm
                    klein. Het enige wat u er tegen kan doen is geen ruzie maken met een persoon die
                    weet hoe hij een DDoS attack moet uitvoeren.
                  </CardsItemP>
                </CardsItemInfo>
              </CardsItemLink>
            </CardsItem>
          </CardsItems>
          <CardsItems>
            <CardsItem>
              <CardsItemLink>
                <CardsIcon>
                  <GiShamblingZombie />
                </CardsIcon>
                <CardsItemInfo>
                  <CardsItemH1>Wat is een zombie?</CardsItemH1>
                  <CardsItemP>
                    Een computer die geïnfecteerd is door een virus, en daardoor onderdeel uitmaakt
                    van een botnet, wordt ook wel een zombie computer genoemd.
                  </CardsItemP>
                </CardsItemInfo>
                <CardsItemInfo>
                  <CardsItemH1>Wat kunt u er tegen doen?</CardsItemH1>
                  <CardsItemP>
                    Om te voorkomen dat uw eigen PC een zombie wordt, is het van belang een
                    antivirus of internet security pakket te installeren. Hierbij is het belangrijk
                    dat dit pakket zeer regelmatig (automatisch) updates installeert. Er verschijnen
                    namelijk voortdurend nieuwe virussen en het pakket heeft de updates nodig om
                    deze te herkennen. Vertrouw nooit gratis antivirusprogramma’s die zich spontaan
                    aanbieden op een website, vaak bevatten deze zelf virussen.
                  </CardsItemP>
                </CardsItemInfo>
              </CardsItemLink>
            </CardsItem>
          </CardsItems>
          <CardsItems>
            <CardsItem>
              <CardsItemLink>
                <CardsIcon>
                  <i class='fas fa-laptop-code'></i>
                </CardsIcon>
                <CardsItemInfo>
                  <CardsItemH1>Wat is een hacker?</CardsItemH1>
                  <CardsItemP>
                    Hackers zijn personen die inbreken op uw computer om persoonlijke informatie te
                    achterhalen of uw computer(s) te misbruiken voor illegale activiteiten. Vaak
                    zijn het de hackers die dingen gebruiken zoals ransomware, spam en botnets om uw
                    gegevens te bemachtigen om door te verkopen op het deep/dark web.
                  </CardsItemP>
                </CardsItemInfo>
                <CardsItemInfo>
                  <CardsItemH1>Wat kunt u er tegen doen?</CardsItemH1>
                  <CardsItemP>
                    U kunt uw eigen computer beveiligen door een antivirus- of internet security
                    pakket te installeren. Hierbij is het belangrijk dat dit pakket zeer regelmatig
                    (automatisch) updates ophaalt. Er verschijnen namelijk voortdurend nieuwe
                    virussen en het pakket heeft de updates nodig om deze te herkennen. Vertrouw
                    echter nooit gratis antivirusprogramma’s die zich spontaan aanbieden op een
                    website, vaak bevatten deze zelf virussen.
                  </CardsItemP>
                </CardsItemInfo>
              </CardsItemLink>
            </CardsItem>
          </CardsItems>
          <CardsItems>
            <CardsItem>
              <CardsItemLink>
                <CardsIcon>
                  <GiTrojanHorse />
                </CardsIcon>
                <CardsItemInfo>
                  <CardsItemH1>Wat is een trojan?</CardsItemH1>
                  <CardsItemP>
                    Een trojan is schadelijke software vermomd als een betrouwbaar programma. Als
                    gebruiker denkt u een betrouwbaar programma op uw computer te installeren, maar
                    in werkelijkheid krijgt een crimineel daarmee toegang tot uw computer.
                  </CardsItemP>
                </CardsItemInfo>
                <CardsItemInfo>
                  <CardsItemH1>Wat is een trojaans paard?</CardsItemH1>
                  <CardsItemP>
                    Een Trojaans paard is een slim computerprogramma dat uw pc overneemt. Zo kan
                    door middel van een Trojaans paard uw computer gebruikt worden om spam te
                    versturen, zelfs zonder dat u het doorhebt. Uw computer is in zo'n geval
                    onderdeel geworden van een botnet; heel veel pc's die gezamenlijk misbruikt
                    worden. Een Trojaans paard kan, net als een worm, uw computer infecteren zonder
                    dat u het door hebt. De naam komt natuurlijk van het echte trojaans paard
                    gebruikt in de oorlog van Troje waarbij de aanvallers een groot houten paard
                    gebruikte om de stat troje binnen te vallen door dit te vermommen als een
                    cadeau.
                  </CardsItemP>
                </CardsItemInfo>
                <CardsItemInfo>
                  <CardsItemH1>Wat kunt u er tegen doen?</CardsItemH1>
                  <CardsItemP>
                    U kunt uw eigen computer beveiligen door een antivirus- of internet security
                    pakket te installeren. Hierbij is het belangrijk dat dit pakket zeer regelmatig
                    (automatisch) updates installeert. Er verschijnen namelijk voortdurend nieuwe
                    virussen en het pakket heeft de updates nodig om deze te herkennen. Vertrouw
                    echter nooit gratis antivirus-programma’s die zich spontaan aanbieden op een
                    website, vaak bevatten deze zelf virussen.
                  </CardsItemP>
                </CardsItemInfo>
              </CardsItemLink>
            </CardsItem>
          </CardsItems>
          <CardsItems>
            <CardsItem>
              <CardsItemLink>
                <CardsIcon>
                  <GiEarthWorm />
                </CardsIcon>
                <CardsItemInfo>
                  <CardsItemH1>Wat is een worm?</CardsItemH1>
                  <CardsItemP>
                    Een worm is een virus met een extra eigenschap. Wormen richten niet alleen
                    schade aan op uw computer, maar gebruiken uw computer ook nog eens om zich te
                    verspreiden. Ook hebben zij geen bestanden nodig om zich aan te hechten; terwijl
                    u aan het internetten bent, kan uw computer ongemerkt geïnfecteerd worden.
                  </CardsItemP>
                </CardsItemInfo>
                <CardsItemInfo>
                  <CardsItemH1>Wat kunt u er tegen doen?</CardsItemH1>
                  <CardsItemP>
                    U kunt uw eigen computer beveiligen door een antivirus of internet security
                    pakket te installeren. Hierbij is het belangrijk dat dit pakket zeer regelmatig
                    (automatisch) updates installeert. Er verschijnen namelijk voortdurend nieuwe
                    virussen en het pakket heeft de updates nodig om deze te herkennen. Vertrouw
                    echter nooit gratis antivirus programma’s die zich spontaan aanbieden op een
                    website, vaak bevatten deze zelf virussen.
                  </CardsItemP>
                </CardsItemInfo>
              </CardsItemLink>
            </CardsItem>
          </CardsItems>
          <CardsItems>
            <CardsItem>
              <CardsItemLink>
                <CardsIcon>
                  <HiShieldExclamation />
                </CardsIcon>
                <CardsItemInfo>
                  <CardsItemH1>Meer gevaren.</CardsItemH1>
                  <CardsItemP>
                    Bent u een gevaar tegengekomen of weet u heeft u nog vragen over andere gevaren?
                    Neem dan contact met ons op via onze livechat functie! U kunt deze vinden aan de
                    onderkant van onze pagine op het ronde icoontje.
                  </CardsItemP>
                </CardsItemInfo>
              </CardsItemLink>
            </CardsItem>
          </CardsItems>
        </CardsWrapper>
      </CardsContainer>
    </Cards>
  );
};

export default GevarenCards;
