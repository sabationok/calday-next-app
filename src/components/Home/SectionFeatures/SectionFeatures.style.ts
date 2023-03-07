import styled from 'styled-components';

export const SectionFeatures = styled.section`
  display: flex;
  flex-direction: column;

  padding-top: 73px;
  padding-bottom: 79px;

  min-height: 150px;

  background-color: var(--bageBackgroundClr);

  @media screen and (min-width: 768px) {
    padding-top: 73px;
    padding-bottom: 79px;
  }
`;

export const FeaturesTitle = styled.h2`
  font-family: 'Gilroy', sans-serif;
  font-weight: 800;
  font-size: 40px;
  line-height: 1.3;

  color: var(--browmPrimeClr);

  padding: 0 18px;

  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 55px;
    padding: 0 138px;
  }
`;
