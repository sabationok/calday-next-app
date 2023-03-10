import styled from 'styled-components';

export const IntegrationItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;

  /* max-width: 215px; */

  flex-basis: 180px;
  flex-grow: 1;
`;

export const IntegrationItemImgBox = styled.div`
  width: 32px;
  height: 32px;
`;
export const IntegrationItemDescr = styled.span`
  font-family: 'Mark Pro', sans-serif;
  font-weight: 450;
  font-size: 15px;
  line-height: 1.73;
  text-align: center;

  color: var(--graySecondary);
`;
