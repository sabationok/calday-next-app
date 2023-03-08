import styled from 'styled-components';

export const EventItemsContainer = styled.div`
  position: absolute;
  top: 156px;
  left: 50%;

  width: 80vw;
  height: 100%;
  max-height: 159px;
  max-width: 722px;
  min-width: 250px;

  transform: translateX(-50%);

  @media screen and (min-width: 768px) {
    top: 187px;
    max-height: 116px;
  }
`;

export const EventItemLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  height: 58px;
  min-width: 213px;

  border-radius: 50px;
  padding: 11px 12px;

  overflow: hidden;

  background-color: #fff;
  box-shadow: -20px 20px 50px rgba(122, 64, 19, 0.3);
`;
