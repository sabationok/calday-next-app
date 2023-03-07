import styled from 'styled-components';

export const Features = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  margin-bottom: 93px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 0 25px 0;
  }

  @media screen and (min-width: 1100px) {
    padding: 0 85px 0 119px;
  }

  /* outline: 1px solid tomato; */
`;

export const FeaturesList = styled.ul`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    /* gap: 35px; */
  }
  @media screen and (min-width: 480px) {
    /* gap: 15px; */
  }
`;

export const FeaturesIlustrationImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
