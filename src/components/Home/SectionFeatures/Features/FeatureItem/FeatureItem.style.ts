import styled from 'styled-components';

export const FeatureItem = styled.li<{ isActive?: boolean }>`
  display: grid;
  grid-template-columns: 26px 1fr;
  gap: 21px;

  min-height: 113px;

  width: 100%;
  padding: 20px;
  border-radius: 26px;

  overflow: hidden;
  background-color: ${({ isActive }) => (isActive ? '#fff' : 'transparent')};
`;
export const FutureButton = styled.button``;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

export const FutereTitle = styled.p`
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

  color: var(--blackPrimary);
`;
