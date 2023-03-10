import styled from 'styled-components';

export const ProfitItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 480px) {
    align-items: flex-start;
    flex-basis: 265px;
  }
`;

export const ProfitItemImg = styled.div`
  margin-bottom: 28px;
`;

export const ProfitItemTitle = styled.p`
  font-family: 'Averta CY', sans-serif;

  font-weight: 800;
  font-size: 26px;
  line-height: 1;

  color: var(--blackPrimary);

  margin-bottom: 16px;
`;

export const ProfitItemDescr = styled.span`
  font-family: 'Mark Pro', sans-serif;

  font-weight: 450;
  font-size: 15px;
  line-height: 1.73;

  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;
