import styled from 'styled-components';

export const MainImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const MainImageBox = styled.div`
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
