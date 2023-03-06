import styled from 'styled-components';

export const MainTitle = styled.h1`
  /* Hero */
  width: 100%;

  text-align: center;

  font-weight: 800;
  font-family: 'Averta CY', sans-serif;
  font-size: 34px;
  line-height: 1.29;
  letter-spacing: 0px;

  margin-bottom: 49px;

  color: var(--browmPrimeClr);

  @media screen and (min-width: 480px) {
    font-family: 'Gilroy', sans-serif;
    font-size: 54px;
    line-height: 1.08;
  }
  @media screen and (min-width: 768px) {
    font-size: 74px;
    max-width: 717px;
  }
`;
