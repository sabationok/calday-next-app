import styled from 'styled-components';

export const ListBackground = styled.div`
  padding-top: 148px;
  padding-bottom: 54px;

  min-width: 100%;
  min-height: 461px;

  background-color: #f7f6f0;
`;

export const Profits = styled.div`
  /* position: absolute;
  bottom: 0;
  left: 0; */

  width: 100%;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 51px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 480px) {
    align-items: flex-start;
    flex-basis: 265px;
  }
`;

export const ListItemImg = styled.div``;

export const ListItemTitle = styled.p`
  font-family: 'Averta CY', sans-serif;

  font-weight: 800;
  font-size: 26px;
  line-height: 1;

  color: var(--blackPrimary);

  margin-bottom: 16px;
`;

export const ListItemDescr = styled.span`
  font-family: 'Mark Pro', sans-serif;

  font-weight: 450;
  font-size: 15px;
  line-height: 1.73;
`;
