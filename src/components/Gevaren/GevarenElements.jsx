import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Cards = styled.div`
  padding: 4rem;
  background: #010606;
`;

export const CardsH1 = styled.h1`
  text-align: center;
  color: #fff;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 1120px;
  width: 90%;
  margin: 0 auto;
`;

export const CardsWrapper = styled.div`
  position: relative;
  margin: 50px 0 45px;
`;

export const CardsItems = styled.div`
  margin-bottom: 100px;

  @media screen and (min-width: 1200px) {
    display: flex;
  }
`;

export const CardsItem = styled.div`
  display: flex;
  flex: 1;
  margin: 0 1rem;
  border-radius: 10px;
  background: #fff;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: scale(1.06, 1.06);
    transition: all 0.4s ease-in-out;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 2rem;
    width: 340px;
  }
`;

export const CardsItemLink = styled(Link)`
  display: flex;
  flex-flow: column;
  width: 100%;
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.17);
  -webkit-filter: drop-shadow(0 6px 20px rgba(255, 255, 255, 0.017));
  filter: drop-shadow(0 6px 20px rgba(255, 255, 255, 0.017));
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
`;

export const CardsIcon = styled.header`
  text-decoration: none;
  text-align: center;
  padding-top: 30px;
  font-size: 75px;
  color: #000;
`;

export const CardsItemInfo = styled.div`
  padding: 20px 30px 30px;
`;

export const CardsItemH1 = styled.h1`
  text-decoration: none;
  text-align: center;
  padding-bottom: 20px;
  color: #000;
`;

export const CardsItemP = styled.p`
  color: #000;
  font-size: 18px;
  line-height: 24px;
`;
