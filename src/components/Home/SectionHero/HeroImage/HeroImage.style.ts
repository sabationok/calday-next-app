import styled from 'styled-components';

export const HeroImageContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  position: relative;

  width: 100%;

  height: 379px;
  overflow: hidden;
`;

export const HeroImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 30px;
  overflow: hidden;

  width: 100%;

  max-width: 250px;

  box-shadow: -20px -20px 40px #fce6bd, 20px 20px 40px rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 480px) {
    max-width: 350px;
  }
`;
