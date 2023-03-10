import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;

  width: 100%;
  height: 64px;

  /* background: linear-gradient(
    90.06deg,
    rgba(236, 231, 169, 0.8) 8.88%,
    rgba(239, 211, 156, 0.8) 100.02%
  ); */
  background: linear-gradient(90deg, #ece9aa 1.16%, #f1cc97 80.04%);
  /* background-color: rgba(236, 231, 169, 0.8); */
  backdrop-filter: blur(25px);
`;

export const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;

  height: 100%;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1.5fr 1fr;
  }
`;
