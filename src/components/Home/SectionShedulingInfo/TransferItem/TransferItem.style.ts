import styled from 'styled-components';

export const TransferItem = styled.li<{ fill: string }>`
  display: flex;
  flex-direction: column;

  fill: ${({ fill }) => fill};

  padding: 30px 20px 20px;

  max-width: 335px;
  height: 335px;

  flex-basis: 230px;
  flex-grow: 1;

  background: #feffdf;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    padding: 36px 30px 24px;
  }
`;

export const TransferWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-bottom: 28px;
`;

export const Title = styled.p`
  font-family: 'Gilroy', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.08;
  color: var(--blackPrimary);
`;

export const DescrList = styled.ul`
  display: flex;
  flex-direction: column;

  list-style: disc;

  padding-left: 20px;
`;

export const DescrListItem = styled.li`
  font-family: 'Mark Pro', sans-serif;
  font-weight: 450;
  font-size: 16px;
  line-height: 2;
`;
