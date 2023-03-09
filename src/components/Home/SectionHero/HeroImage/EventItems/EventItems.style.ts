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
