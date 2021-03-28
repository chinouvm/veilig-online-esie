import React from 'react';
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

const Card = ({
  icon,
  titleOne,
  titleTwo,
  descriptionOne,
  descriptionTwo,
  id,
}) => {
  return (
    <Cards id={id}>
      <CardsContainer>
        <CardsWrapper>
          <CardsItems>
            <CardsItem>
              <CardsItemLink to="/phishing">
                <CardsIcon>{icon}</CardsIcon>
                <CardsItemInfo>
                  <CardsItemH1>{titleOne}</CardsItemH1>
                  <CardsItemP>{descriptionOne}</CardsItemP>
                </CardsItemInfo>
                <CardsItemInfo>
                  <CardsItemH1>{titleTwo}</CardsItemH1>
                  <CardsItemP>{descriptionTwo}</CardsItemP>
                </CardsItemInfo>
              </CardsItemLink>
            </CardsItem>
          </CardsItems>
        </CardsWrapper>
      </CardsContainer>
    </Cards>
  );
};

export default Card;
