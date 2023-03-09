import styled from 'styled-components';

export const FeatureItem = styled.li<{ isActive?: boolean }>`
  cursor: default;

  overflow: hidden;

  background-color: ${({ isActive }) => (isActive ? '#f7f6f0' : 'transparent')};
  fill: ${({ isActive }) => (isActive ? '#62C45B' : '#D8B682')};

  transition: all var(--timing-function__main);

  @media screen and (min-width: 768px) {
    border-radius: 26px;
    background-color: ${({ isActive }) => (isActive ? '#fff' : 'transparent')};
  }
`;
export const FutureButton = styled.button`
  display: grid;
  grid-template-columns: 26px 1fr;
  gap: 21px;
  min-height: 113px;
  width: 100%;
  padding: 20px;
  overflow: hidden;

  background-color: transparent;
  border-style: none;

  transition: all var(--timing-function__main);
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0;
`;
export const FutureTitle = styled.p`
  font-family: 'Gilroy', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.3;

  color: var(--blackPrimary);
`;

export const FutureDescr = styled.span`
  font-family: 'Mark Pro', sans-serif;
  font-weight: 450;
  font-size: 15px;
  line-height: 1.73;
  text-align: left;
  color: var(--blackPrimary);
`;
export const FutureItemImage = styled.div`
  max-height: 324px;
  width: 100%;

  max-width: 320px;

  margin: 0 auto;
`;
