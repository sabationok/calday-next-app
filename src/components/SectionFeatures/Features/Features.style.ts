import styled from 'styled-components';

export const Features = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 85px 0 119px;
  }

  outline: 1px solid tomato;
`;

export const FeaturesList = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    gap: 35px;
  }
  @media screen and (min-width: 480px) {
    gap: 15px;
  }
`;

export const FeaturesListItem = styled.li`
  display: grid;
  grid-template-columns: 26px 1fr;
  gap: 21px;

  min-height: 113px;

  width: 100%;
  padding: 20px;

  outline: 1px solid tomato;
`;

export const FeaturesIlustrationImage = styled.div`
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1100px) {
    display: none;
  }

  outline: 1px solid tomato;
`;
