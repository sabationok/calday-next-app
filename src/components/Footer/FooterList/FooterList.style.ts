import styled from 'styled-components';

export const FooterList = styled.ul`
  display: grid;
  gap: 20px;

  grid-template-columns: 1fr;

  margin-bottom: 60px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const FooterListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Title = styled.p`
  font-family: 'Gilroy', sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 1.89;
  color: var(--bagePrimary);
`;

export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LinksListItem = styled.li`
  font-family: 'Mark Pro', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 0.93;
  color: #ffffff;
`;
export const ListItemTextBold = styled.li`
  font-family: 'Mark Pro', sans-serif;
  font-weight: 800;
  font-size: 18px;
  /* line-height: 1.67; */
  color: #ffffff;
`;
