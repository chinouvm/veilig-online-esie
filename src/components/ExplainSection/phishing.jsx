import React from 'react';
import { GiFishingPole } from 'react-icons/gi';
import {
  Cards,
  CardsContainer,
  CardsWrapper,
  CardsItems,
  CardsItem,
  CardsItemLink,
  CardsIcon,
  CardsItemInfo,
  CardsItemH1,
  CardsItemP,
} from './CardElement';

const CardPhish = () => {
  return (
    <Cards id="phishing">
      <CardsContainer>
        <CardsWrapper>
          <CardsItems>
            <CardsItem>
              <CardsItemLink to="/phishing">
                <CardsIcon>
                  <GiFishingPole />
                </CardsIcon>
                <CardsItemInfo>
                  <CardsItemH1>Wat is Phishing?</CardsItemH1>
                  <CardsItemP>
                    Phishing is een verzamelnaam voor e-mail of internetpagina's
                    die zich voordoen als vertrouwde instellingen en bedrijven,
                    vaak uw bank of veilingsites, maar dat in werkelijkheid niet
                    zijn. Ze zullen u vragen om wachtwoorden of een
                    creditcardnummer te geven om die vervolgens te misbruiken en
                    geld of gegevens van u te stelen. Betrouwbare instanties
                    zullen u nooit om uw wachtwoorden vragen. Wordt er wel om uw
                    wachtwoord of pincode gevraagd, ga hier dan niet op in en
                    meld dit bij de organisatie waar dit betrekking op heeft.
                  </CardsItemP>
                </CardsItemInfo>
                <CardsItemInfo>
                  <CardsItemH1>Wat voor soorten phishing zijn er?</CardsItemH1>
                  <CardsItemP>
                    <strong>Spear Phishing:</strong> Bij de meeste
                    phishing-campagnes worden bulke-mails naar zo veel mogelijk
                    mensen verzonden, maar spear phishing werkt gericht. Spear
                    phishing valt een specifieke persoon of organisatie aan,
                    vaak met inhoud die is toegesneden op het slachtoffer of de
                    slachtoffers. Een oplichter kan bijvoorbeeld spear phishing
                    uitvoeren op een medewerker die verantwoordelijk is voor de
                    autorisatie van betalingen. Spear phishing is een kritieke
                    bedreiging van bedrijven en het kost veel geld. Volgens een
                    rapport uit 2016 over een onderzoek naar het onderwerp was
                    spear phishing verantwoordelijk voor 38% van de
                    cyberaanvallen op deelnemende ondernemingen gedurende 2015.
                    <br />
                    <br />
                    <strong>Clone Phishing:</strong> Bij deze aanval maken
                    criminelen een kopie — of kloon — van eerdere bezorgde en
                    legitieme e-mails die een koppeling of een bijlage bevatten.
                    Vervolgens vervangt de phisher de koppelingen of de
                    bestanden in bijlage door kwaadaardige substituten die
                    vermomd zijn als de oorspronkelijke koppelingen of
                    bestanden. Nietsvermoedende gebruikers klikken op de
                    koppeling of openen de bijlage waardoor hun systemen in veel
                    gevallen worden overgenomen. Vervolgens kan de phisher de
                    identiteit van het slachtoffer nabootsen om zich aan andere
                    slachtoffers in dezelfde organisatie voor te doen als een
                    vertrouwde afzender.
                    <br />
                    <br />
                    <strong>Nigeriaanse zwendel:</strong> Een langdradige
                    phishing-e-mail van iemand die beweert dat hij een
                    Nigeriaanse prins is, is een van de eerste en langstlopende
                    zwendels op internet. Volgens Wendy Zamora, hoofd Content
                    van Malwarebytes Labs, "komt de phish over de Nigeriaanse
                    prins van iemand die beweert een overheidsfunctionaris of
                    een lid van een koninklijke familie te zijn, die hulp nodig
                    heeft om miljoenen dollars Nigeria uit te krijgen. De e-mail
                    is gemarkeerd als 'dringend' of 'privé' en de afzender
                    vraagt de ontvanger om een bankrekening op te geven waarop
                    de gelden in bewaring kunnen worden gegeven".
                    <br />
                    <br />
                    <strong>Phone Phishing:</strong> Bij phishing-pogingen per
                    telefoon, soms ook voice phishing of 'vishing' genoemd, belt
                    de phisher u op en beweert namens uw bank, de politie of
                    zelfs de belastingdienst te handelen. Vervolgens maken ze u
                    bang met een of ander probleem en dringen aan om dit direct
                    op te lossen door uw rekeninggegevens te delen of anders een
                    boete te betalen. Ze vragen u doorgaans om via een
                    telegrafische overboeking of via prepaidkaarten te betalen
                    zodat ze onmogelijk op te sporen zijn. Bij phone phishing
                    hoort ook <strong>SMS Phishing</strong>, of 'smishing',
                    smishing is de kwade evenknie van vishing, waarbij via
                    sms-berichten dezelfde soort zwendel wordt bedreven (soms
                    met een ingebouwde kwaadaardige koppeling om op te klikken).
                  </CardsItemP>
                </CardsItemInfo>
                <CardsItemInfo>
                  <CardsItemH1>Wat kunt u er tegen doen?</CardsItemH1>
                  <CardsItemP>
                    U kunt uzelf beveiligen tegen phishing door altijd te
                    controleren aan wie u uw persoonlijke gegevens geeft. Geen
                    enkel bedrijf zal uw persoonlijke gegevens zomaar over de
                    e-mail opvragen. Mocht u twijfelen, neem dan eerst contact
                    op met het bedrijf dat uw gegevens vraagt.
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

export default CardPhish;
