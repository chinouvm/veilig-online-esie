import { BsNewspaper } from 'react-icons/bs';
import { RiBugFill } from 'react-icons/ri';
import { RiVirusLine } from 'react-icons/ri';

export const ExplObjMalware = {
  id: 'malware',
  titleOne: 'Wat is malware?',
  titleTwo: 'Wat kan ik er tegen doen?',
  descriptionOne:
    'Malware is de overkoepelende term voor computersoftware of code met kwaadaardige bedoelingen. Malware probeert computers, computersystemen, netwerken en/of mobiele apparaten binnen te dringen, te beschadigen of uit te schakelen, vaak door (gedeeltelijk) de controle over te nemen over het apparaat.',
  descriptionTwo:
    'Malware kan niet werken zonder het belangrijkste ingrediënt: u. Malware kan uw computer binnendringen via geïnfecteerde bestanden. Dat kunnen bestanden zijn die u download via internet, of bijvoorbeeld wanneer u een schadelijke e-mailbijlage opent. Blijf daarom altijd waakzaam en let goed op! Open geen ongevraagde e-mailbijlagen en download geen software of bestanden van onbetrouwbare websites. En zorg ervoor dat uw besturingssysteem, browsers en plug-ins altijd up-to-date zijn.',
  icon: <RiBugFill />,
};

export const ExplObjVirussen = {
  id: 'virussen',
  titleOne: 'Wat is een virus?',
  titleTwo: 'Wat kan ik er tegen doen?',
  descriptionOne:
    "Virussen zijn kleine programma's die zich verstoppen in andere bestanden, bijvoorbeeld foto's of bestanden die u per mail ontvangt. Eenmaal op uw computer kunnen ze flinke schade aanrichten door bijvoorbeeld bestanden te beschadigen of verwijderen.",
  descriptionTwo:
    'U kunt uw eigen computer beveiligen door een antivirus of internet security pakket te installeren. Hierbij is het is belangrijk dat dit pakket zeer regelmatig (automatisch) updates installeert. Er verschijnen namelijk voortdurend nieuwe virussen en het pakket heeft de updates nodig om deze te herkennen. Vertrouw nooit gratis antivirusprogramma’s die zich spontaan aanbieden op een website, vaak bevatten deze zelf virussen.',
  icon: <RiVirusLine />,
};

export const ExplObjNepnieuws = {
  id: 'nepnieuws',
  titleOne: 'Wat is nepnieuws?',
  titleTwo: 'Wat kan ik er tegen doen?',
  descriptionOne:
    'Nepnieuws is overal en het wordt steeds gevaarlijker. Niet alleen doen mensen het voor de grap maar er zijn genoeg mensen die er enorme ruzie over krijgen wat voor nog meer conflict zorgt. Nepnieuws is tegenwoordig heel lastig te herkennen maar gelukkig werken socialemedia er al aan om een feitenchecker toe te voegen die automatisch scant op nepnieuws.',
  descriptionTwo:
    'Om geen slachtoffer te worden van nepnieuws moet u alles wat u op internet leest met een korreltje zout nemen. Natuurlijk kunt u wikipedia voor het grootste gedeelte vertrouwen maar zelfs daar moet u niet 100% op vertrouwen. Maar hoe weet u nou of het nep is of niet? Dat is helaas niet zo makkelijk uit te leggen, natuurlijk kunt u het onderwerp waar het nieuws over gaat even googelen om te kijken of u soortgelijke resultaten kunt vinden maar als u alles op het internet niet meteen gebruikt als argument zet u al een enorme stap de goede richting in.',
  icon: <BsNewspaper />,
};
